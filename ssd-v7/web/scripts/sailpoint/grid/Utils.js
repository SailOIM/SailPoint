/* (c) Copyright 2012 SailPoint Technologies, Inc., All Rights Reserved. */

/**
 * Collection of utilities for ExtJS-based grids
 */
Ext.define('SailPoint.grid.Util', {
    statics : {
        /** 
         * Renders boolean data as checkboxes or blank cells.  This method is intended to be used
         * as a renderer in a grid column.
         */
        renderBoolean: function(value, metadata, record, rowIndex, colIndex, store) {
            return SailPoint.grid.Util.renderBooleanImpl(value, metadata, 'true');
        },

        /**
         * Renders boolean data as a check icon or blank cell. This renderer will render the icon
         * for the negated value of the boolean.
         */
        renderBooleanNot: function(value, metadata, record, rowIndex, colIndex, store) {
            return SailPoint.grid.Util.renderBooleanImpl(value, metadata, 'false');
        },

        /**
         * Returns the value passed to it
         * @param value the value to render
         * @returns {*} the rendered value
         */
        renderRawValue: function(value) {
            return value
        },
        /**
         * Implementation of rendering a boolean grid column value as an icon.
         */
        renderBooleanImpl: function(value, metadata, trueString) {
            var renderedHTML,
                boolValue, isTrue;

            if (value && typeof(value) == "string") {
          		if (value.toString().toLowerCase() === trueString) {
          			isTrue = true;
          		} else {
          			isTrue = false;
          		}
            } else {
            	boolValue = new Boolean(value);
            	if (boolValue.toString().toLowerCase() === trueString) {
            		isTrue = true;
            	} else {
            		isTrue = false;
            	}
            }
            // Render a checkbox in cells whose string value is equal to trueString
            if (isTrue) {
                renderedHTML = '<img src="' + SailPoint.getRelativeUrl('/images/icons/accept.png') + '"/>';
            } else {
                renderedHTML = '&nbsp;'
            }

            // Fix the cell's metadata so that the icon is centered
            metadata.style = 'text-align:center';

            return renderedHTML;
        },
        
        /**
         * Renders HTML formatted description text.  This method is intended to be used
         * as a renderer in a grid column.
         */
        renderDescription: function(value, metadata, record, rowIndex, colIndex, store) {
            var str = '<div style="white-space:normal !important;">{0}</div>';
            return Ext.String.format(str, ( value == null ? '' : value));
        },
        
        /**
         * Renders the text in our 'fakeLink' style.  This method is a renderer for a grid column
         */
        renderFakeLink: function(value, metadata, record, rowIndex, colIndex, store) {
            metadata.tdCls="fakeLink";
            return value;
        },
 
        renderFakeLinkWithTtip: function(value, metadata, record, rowIndex, colIndex, store, view) {
            var valWithToolTip = SailPoint.grid.Util.renderToolTip(value, metadata, record, rowIndex, colIndex, store, view);
            metadata.tdCls="fakeLink";
            return valWithToolTip;
        },

        /**
         * Simply renders a disclosure icon up/down for the expando grid field
         */
        renderGridExpandoIcon: function(value, metadata, record, rowIndex, colIndex, store) {

            return '<a class="disclosure">' + value + '</a>';
        },

        /**
         * render the disclosure icon, but also render a tooltip
         */
        renderGridExpandoIconWithTtip: function(value, metadata, record, rowIndex, colIndex, store, view) {
            var valWithToolTip = SailPoint.grid.Util.renderToolTip(value, metadata, record, rowIndex, colIndex, store, view);
            return '<a class="disclosure">' + valWithToolTip + '</a>';
        },

        /**
         * Renders a tooltip by prefixing the img id with imgHlp
         * Be sure the img id is unique for the record and column.
         */
        renderToolTip: function(value, metadata, record, rowIndex, colIndex, store, view) {
            // get a unique id for this column/record
            var id = record.id + "-" + colIndex;
            var str = (Array.isArray(value) ? value.join(', ') : value);
            var colWidth = view.ownerCt.columns[colIndex].getWidth();
            // let's get an exact pixel width of the string
            var txtPixelWidth = Ext.util.TextMetrics.measure(view.ownerCt.columns[colIndex].el, str).width;

            // default, in case we can't get a good measurement.
            var pixelsPerChar = 7.5;
            if (str.length > 0 && txtPixelWidth > 0) {
                pixelsPerChar = txtPixelWidth / str.length;
            }
            var inlineSpan = '<span id="name_' + id + '">';
            var valueSpan;
            var valWithToolTip = inlineSpan;

            var colCharWidth = colWidth / pixelsPerChar;
            if (txtPixelWidth > colWidth) {
                str = str.substring(0,colCharWidth - 6) + "...";
                valueSpan = '<span>' + str + '</span>';
                var infoImg = '<img style="margin:0 2px 0 2px" src="' + SailPoint.CONTEXT_PATH + '/images/icons/info.png" height="14px" width="14px" id="imgHlp_' + id + '" ttip="' + value + '"/>';
                valWithToolTip = inlineSpan + valueSpan + infoImg;
            } else {
                valueSpan = '<span>' + str + '</span>';
                valWithToolTip = inlineSpan + valueSpan;
            }

            valWithToolTip = valWithToolTip + "</span>";

            return valWithToolTip;

        },

        /**
         * Renders a JSON-based set of icons.  Each record's IIQ_accountIcons field contains something like this:
         * [{ title: 'Icon Tooltip', icon: 'icon/image/url' }, { ... }, ...]  
         */
        renderAccountWithIcons: function(value, metadata, record, rowIndex, colIndex, store) {
            var iconsHtml = '';
            var iconObjs = record.get('IIQ_accountIcons');
            var iconObj;
            var i;
            
            if (iconObjs) {
                iconsHtml = '<div style="float:right; margin-left: 10px;">';
                for (i = 0; i < iconObjs.length; ++i) {
                    iconObj = iconObjs[i];
                    iconsHtml += "<img title='"+SailPoint.sanitizeHtml(iconObj.title)+"' src='"+ SailPoint.getRelativeUrl(iconObj.icon) +"' class='inlineGridIcon'/>";
                }
            }

            iconsHtml += "</div>";
            
            // Fall back on the account's native identity if its name is null
            if (value == null) {
                value = record.get('nativeIdentity');
            }
            
            // Note: the shenanigans with the EventManager prevent the link from interfering with the expando's functionality 
            return '<div style="width: 98%;">' + iconsHtml + '<a class="disclosure account" onclick="Ext.fly(Ext.EventManager.getTarget(event)).parent(\'div\', true).click();">' + value + '</a></div>';
        },
        
        renderStatusWithIcon: function(value, metadata, record, rowIndex, colIndex, store) {
            var statusStyleClass = record.get('IIQ_status_class');
            var iconHtml = '<div class="statusIcon ' + statusStyleClass + ' inlineGridIcon"></div>';
            var html = '<div style="width: 98%;">' + iconHtml + '<span>' + value + '</span></div>';
            return html;
        },
        
        renderESigMeaning: function(obj, meta, record) {

            var meaning;
            
            if(!obj) {
                obj = {};
            }
            
            if(SailPoint.CURR_USER_LOCALE && SailPoint.CURR_USER_LOCALE != "") {
                meaning = obj[SailPoint.CURR_USER_LOCALE];
            }
            
            if(meaning == null) {
                // SYSTEM_LOCALE is either the system default, the first allowed, or the JVM locale (in that order).
                meaning = obj[SailPoint.SYSTEM_LOCALE];
            }
            
            if(meaning == null) {
                meaning = "";
            }

            return meaning;
        },

        wordWrapRenderer: function(value, metaData, record, row, col, store, gridView) {
            metaData.style='white-space: pre-line !important; word-wrap: break-word !important;'
            return value;
        },
        
        renderScore: function(value, p, record) {
            str = '<div class=\'riskIndicator ri_{0}\'>{1}</div>';
            return Ext.String.format(str, value.color, value.score);
        },

        renderClassifications: function(value, p, record) {
            if (!Ext.isEmpty(value)) {
                var str = '<span class=\"classification-icon fa-stack\" ><i class=\"fa fa-folder fa-stack-2x\"></i>'
                    + '<i class=\"fa fa-exclamation fa-stack-1x fa-inverse\"></i></span>';
                return str + '&nbsp;&nbsp;' + (Array.isArray(value) ? value.join(', ') : value);
            } else {
                return "";
            }
        },

        renderESigDisplayName: function(obj, meta, record) {
            return SailPoint.Utils.escapeForXss(obj);
        }
    }
});
