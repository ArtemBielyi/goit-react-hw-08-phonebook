"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[18],{18:function(t,e,n){n.r(e),n.d(e,{default:function(){return E}});var a=n(434),s=function(t){return t.filter},c=function(t){return t.contacts.contactList},r=n(634),l="ContactForm_contacts__KyxN4",i="ContactForm_contacts__title__W6AA2",o="ContactForm_contacts__form__iJnur",_="ContactForm_contacts__label__uN0zz",m="ContactForm_contacts__input__JPrCL",u="ContactForm_contacts__button__+PagL",d=n(184),h=function(){var t=(0,a.I0)(),e=(0,a.v9)(c);return(0,d.jsxs)("div",{className:l,children:[(0,d.jsx)("h2",{className:i,children:"Add new contacts"}),(0,d.jsxs)("form",{className:o,onSubmit:function(n){n.preventDefault();var a=n.target,s=a.elements.name.value,c=s.toLowerCase(),l=a.elements.number.value;if(e.find((function(t){return t.name.toLowerCase()===c})))alert("".concat(s," is already in contacts."));else{var i={name:s,number:l};t((0,r.uK)(i)),a.reset()}},children:[(0,d.jsxs)("label",{className:_,children:["Name",(0,d.jsx)("input",{className:m,type:"text",name:"name",placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,d.jsxs)("label",{className:_,children:["Phone",(0,d.jsx)("input",{className:m,type:"tel",name:"number",placeholder:"Phone number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,d.jsx)("button",{className:u,type:"submit",children:"Add contact"})]})]})},f=n(791),x="Contacts_contactsList__wrap__Tbpwp",j="Contacts_contactsList__name__hsA8Q",p="Contacts_contactsList__button__JP9Q8",N=function(t){var e=t.contact,n=(0,a.I0)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:x,children:[(0,d.jsxs)("p",{className:j,children:[e.name,":"]}),(0,d.jsx)("a",{href:"tel:contact.number",children:e.number})]}),(0,d.jsx)("button",{className:p,type:"button",onClick:function(){return n((0,r.GK)(e.id))},children:"Delete"})]})},b=function(){var t=(0,a.I0)(),e=(0,a.v9)(c),n=(0,a.v9)(s);(0,f.useEffect)((function(){t((0,r.yF)())}),[t]);var l=function(){if(!n)return e;var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))}();return(0,d.jsxs)("div",{className:"contactsList",children:[(0,d.jsx)("h2",{className:"contactsList__title",children:"Contacts list"}),(0,d.jsx)("ul",{className:"contactsList__list",children:l.map((function(t){return(0,d.jsx)("li",{className:"contactsList__item",children:(0,d.jsx)(N,{contact:t})},t.id)}))})]})},v=n(808),C="Filter_filter__vxThR",F="Filter_filter__title__R1JXX",L="Filter_filter__bcg__xXrXi",w="Filter_filter__form__OSSsU",y="Filter_filter__label__ttfPR",g="Filter_filter__input__toa89",k="Filter_filter__descr__jxG1H",A=function(){var t=(0,a.I0)(),e=(0,a.v9)(c);return(0,d.jsxs)("div",{className:C,children:[(0,d.jsx)("h2",{className:F,children:"Filter contacts"}),(0,d.jsx)("div",{className:L}),(0,d.jsxs)("div",{className:w,children:[(0,d.jsxs)("label",{className:y,children:["Find contacts by name",(0,d.jsx)("input",{className:g,name:"filter",onChange:function(e){var n=e.currentTarget.value;t((0,v.x)(n))}})]}),(0,d.jsxs)("p",{className:k,children:["Total contacts: ",e.length]})]})]})},P="Contacts_section__JEEdl",z="Contacts_containerphonebook__EdkMy",J="Contacts_hidden__b+rQS",E=function(){return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("main",{children:(0,d.jsx)("section",{className:P,children:(0,d.jsxs)("div",{className:z,children:[(0,d.jsx)("h1",{className:J,children:"Phonebook"}),(0,d.jsx)(h,{}),(0,d.jsx)(A,{}),(0,d.jsx)(b,{})]})})})})}}}]);
//# sourceMappingURL=18.904158a8.chunk.js.map