 
function HtmlTextBox_Done() {
    Qv.AddExtension("MinimalisticHtmlTextBox",
        function() {
             
             var divHtml;
             if (!this.divCreated) {
                 divHtml = document.createElement("div");
             	 divHtml.style.width = this.GetWidth() + "px";
				 divHtml.style.height = this.GetHeight() + "px";
				 divHtml.style.overflow = "auto";
				 
                 divHtml.innerHTML = this.Layout.Text0.text;
				 setProps(divHtml, this);
                 this.Element.appendChild(divHtml);
                 this.divCreated = true;		
             }
             else {
                 divHtml = this.Element.childNodes[0];
                 divHtml.innerHTML = this.Layout.Text0.text;
				 divHtml.style.width = this.GetWidth() + "px";
				 divHtml.style.height = this.GetHeight() + "px";
				 setProps(divHtml, this);
             }
             }, false);
			 
			 function setProps(obj, parentObj) {
			 	
				// Font Props
				obj.style.fontStyle = parentObj.Layout.Style.fontstyle;
				obj.style.fontFamily = parentObj.Layout.Style.fontfamily;
				obj.style.fontSize = parentObj.Layout.Style.fontsize + "pt";
				
				obj.style.paddingTop = parentObj.Layout.Style.radiustopleft + "px";
				obj.style.paddingLeft = parentObj.Layout.Style.radiustopleft + "px";
				obj.style.paddingRight = parentObj.Layout.Style.radiustopright + "px";
				
				// does not make sense
				// divHtml.style.textDecoration = this.Layout.Style.textdecoration;
				// divHtml.style.fontColor = this.Layout.Style.fontcolor;
			 }
}
HtmlTextBox_Done();
