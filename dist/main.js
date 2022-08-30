(()=>{"use strict";const e=document.querySelector(".content"),t=(document.querySelector(".add-button"),document.querySelector(".details-button"),document.querySelector(".home"),document.querySelector(".details-window")),o=document.querySelector(".edit-window"),n=(document.querySelector(".edit-button"),document.querySelector(".overlay")),d=(document.querySelector(".close-details-button"),document.querySelector(".close-edit-button")),c=document.querySelector(".add-task"),s=document.querySelector(".todo-content"),l=document.querySelector(".edit-title-input"),i=document.querySelector(".edit-details-input"),a=document.querySelector(".submit-edit");function r(e){n.classList.remove("display-none"),e.classList.remove("display-none")}function u(e){n.classList.add("display-none"),e.classList.add("display-none")}document.querySelector(".details-label");const m=function(e,c,s,l){const i=document.createElement("div");i.classList.add("todo-item");const a=document.createElement("div"),m=document.createElement("input");m.type="checkbox";const y=document.createElement("p");y.classList.add("title"),y.innerText=e,a.append(m,y);const p=document.createElement("div"),L=document.createElement("button");L.classList.add("details-button"),L.innerText="Details";const E=document.createElement("button");E.classList.add("edit-button"),E.innerText="Edit";const T=document.createElement("button");T.classList.add("delete-button"),T.innerText="Delete";const S=document.createElement("p");return S.classList.add("date"),S.innerText=l,p.append(L,E,S,T),i.append(a,p),L.addEventListener("click",(()=>{r(t),t.innerHTML="",t.append(function(e,o,d,c){const s=document.createElement("div");s.classList.add("details-window");const l=document.createElement("button");l.classList.add("close-details-button"),l.innerText="Close";const i=document.createElement("p");i.classList.add("details-title"),i.innerText=e;const a=document.createElement("div");return a.classList.add("details-description"),a.innerText=o,l.addEventListener("click",(()=>{!function(e,t){e.classList.toggle("display-none"),t.classList.toggle("display-none")}(n,t)})),s.append(l,i,a),s}(e,c))})),E.addEventListener("click",(()=>{r(o)})),d.addEventListener("click",(()=>{u(o)})),i},y=[{title:"Hello World From Array",details:"Saying hello from afar",priority:"Medium",dueDate:"12/12/4314",complete:!1},{title:"Greetings to you",details:"Greetings from me to you",priority:"Medium",dueDate:"12/12/4824",complete:!1},{title:"I am terror",details:"Screeem!",priority:"Medium",dueDate:"12/12/4124",complete:!1}],p=document.querySelector("body");console.log(y),p.onscroll=()=>{console.log("Hello body")},s.onscroll=()=>{console.log("Hello, todo-content")},e.onscroll=()=>{console.log("hello, content")},a.addEventListener("click",(()=>{L.addTask({title:l.value,details:i.value,priority:"High",dueDate:"13/10/4408",complete:!1})})),c.addEventListener("click",(()=>{L.editTask(o)}));const L=new class{constructor(e){this.arrayOfTodos=e}displayTasks(){this.arrayOfTodos.forEach((e=>{s.append(m(e.title,e.details,e.priority,e.dueDate))}))}addTask(e){this.arrayOfTodos.unshift(e),s.innerHTML="",console.log("Home Projects Array: ",y),this.displayTasks(),u(o)}editTask(){r(o)}}(y);L.displayTasks()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQVk0QixVQUFZLEdBQ3hCTyxRQUFRQyxJQUFJLHdCQUF5QixHQUNyQ1EsS0FBS0MsZUFDTHJDLEVBQVlaLEVBQ2QsQ0FDQTZDLFdBQ0VyQyxFQUFXUixFQUNiLEdBR2dDLEdBQ2xDMEMsRUFBYU8sYyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvZG9tU3R1ZmYvZ2V0RWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9kb21TdHVmZi91dGlsaXR5RnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZG9tU3R1ZmYvY29tcG9uZW50cy9kZXRhaWxzV2luZG93LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvZG9tU3R1ZmYvY29tcG9uZW50cy90b2RvSXRlbUNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3Byb2plY3REYXRhLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcclxuY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtYnV0dG9uXCIpO1xyXG5jb25zdCBkZXRhaWxzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXRhaWxzLWJ1dHRvblwiKTtcclxuY29uc3QgaG9tZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKTtcclxuY29uc3QgZGV0YWlsc1dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGV0YWlscy13aW5kb3dcIik7XHJcbmNvbnN0IGVkaXRXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVkaXQtd2luZG93XCIpO1xyXG5jb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LWJ1dHRvblwiKTtcclxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuY29uc3QgY2xvc2VEZXRhaWxzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1kZXRhaWxzLWJ1dHRvblwiKTtcclxuY29uc3QgY2xvc2VFZGl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1lZGl0LWJ1dHRvblwiKTtcclxuY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tcIik7XHJcbmNvbnN0IHRvZG9Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLWNvbnRlbnRcIik7XHJcbmNvbnN0IGVkaXRUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXRpdGxlLWlucHV0XCIpO1xyXG5jb25zdCBlZGl0RGV0YWlsc0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LWRldGFpbHMtaW5wdXRcIik7XHJcbmNvbnN0IHN1Ym1pdFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC1lZGl0XCIpO1xyXG5cclxuZXhwb3J0IHtcclxuICBjb250ZW50LFxyXG4gIGFkZEJ1dHRvbixcclxuICBkZXRhaWxzQnV0dG9uLFxyXG4gIG92ZXJsYXksXHJcbiAgY2xvc2VEZXRhaWxzQnV0dG9uLFxyXG4gIGRldGFpbHNXaW5kb3csXHJcbiAgaG9tZSxcclxuICBjbG9zZUVkaXRCdXR0b24sXHJcbiAgZWRpdFdpbmRvdyxcclxuICBlZGl0QnV0dG9uLFxyXG4gIGFkZFRhc2tCdXR0b24sXHJcbiAgdG9kb0NvbnRlbnQsXHJcbiAgZWRpdFRpdGxlSW5wdXQsXHJcbiAgZWRpdERldGFpbHNJbnB1dCxcclxuICBzdWJtaXRUYXNrQnV0dG9uLFxyXG59O1xyXG4iLCJpbXBvcnQgeyBvdmVybGF5IH0gZnJvbSBcIi4vZ2V0RWxlbWVudHNcIjtcclxuXHJcbmZ1bmN0aW9uIG9wZW5XaW5kb3codGFyZ2V0KSB7XHJcbiAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheS1ub25lXCIpO1xyXG4gIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheS1ub25lXCIpO1xyXG59XHJcbmZ1bmN0aW9uIGNsb3NlV2luZG93KHRhcmdldCkge1xyXG4gIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktbm9uZVwiKTtcclxuICB0YXJnZXQuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktbm9uZVwiKTtcclxufVxyXG5cclxuZXhwb3J0IHsgY2xvc2VXaW5kb3csIG9wZW5XaW5kb3cgfTtcclxuIiwiaW1wb3J0IHsgb3ZlcmxheSwgZGV0YWlsc1dpbmRvdyB9IGZyb20gXCIuLi9nZXRFbGVtZW50c1wiO1xyXG5cclxuY29uc3QgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRldGFpbHMtbGFiZWxcIik7XHJcblxyXG5mdW5jdGlvbiBkZXRhaWxzQ29tcG9uZW50KHRpdGxlVGV4dCwgZGV0YWlscywgcHJpb3JpdHksIGR1ZURhdGUpIHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGV0YWlscy13aW5kb3dcIik7XHJcblxyXG4gIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY2xvc2UtZGV0YWlscy1idXR0b25cIik7XHJcbiAgY2xvc2VCdXR0b24uaW5uZXJUZXh0ID0gXCJDbG9zZVwiO1xyXG5cclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzLXRpdGxlXCIpO1xyXG4gIHRpdGxlLmlubmVyVGV4dCA9IHRpdGxlVGV4dDtcclxuXHJcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXRhaWxzLWRlc2NyaXB0aW9uXCIpO1xyXG4gIGRlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGRldGFpbHM7XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZURpc3BsYXkob3ZlcmxheSwgdGFyZ2V0KSB7XHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoXCJkaXNwbGF5LW5vbmVcIik7XHJcbiAgICB0YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZShcImRpc3BsYXktbm9uZVwiKTtcclxuICB9XHJcblxyXG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICB0b2dnbGVEaXNwbGF5KG92ZXJsYXksIGRldGFpbHNXaW5kb3cpO1xyXG4gIH0pO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kKGNsb3NlQnV0dG9uLCB0aXRsZSwgZGVzY3JpcHRpb24pO1xyXG5cclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZXRhaWxzQ29tcG9uZW50O1xyXG4iLCJpbXBvcnQge1xyXG4gIG92ZXJsYXksXHJcbiAgZWRpdFdpbmRvdyxcclxuICBjbG9zZURldGFpbHNCdXR0b24sXHJcbiAgY2xvc2VFZGl0QnV0dG9uLFxyXG4gIGRldGFpbHNXaW5kb3csXHJcbn0gZnJvbSBcIi4uL2dldEVsZW1lbnRzXCI7XHJcblxyXG5pbXBvcnQgeyBvcGVuV2luZG93LCBjbG9zZVdpbmRvdyB9IGZyb20gXCIuLi91dGlsaXR5RnVuY3Rpb25zXCI7XHJcbmltcG9ydCBkZXRhaWxzQ29tcG9uZW50IGZyb20gXCIuL2RldGFpbHNXaW5kb3dcIjtcclxuXHJcbmZ1bmN0aW9uIHRvZG9Db21wb25lbnQodGl0bGVUZXh0LCBkZXRhaWxzLCBwcmlvcml0eSwgZHVlRGF0ZSkge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWl0ZW1cIik7XHJcblxyXG4gIGNvbnN0IGZpcnN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBpbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xyXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcInRpdGxlXCIpO1xyXG4gIHRpdGxlLmlubmVyVGV4dCA9IHRpdGxlVGV4dDtcclxuXHJcbiAgZmlyc3REaXYuYXBwZW5kKGlucHV0LCB0aXRsZSk7XHJcblxyXG4gIGNvbnN0IHNlY29uZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIGNvbnN0IGRldGFpbHNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGRldGFpbHNCdXR0b24uY2xhc3NMaXN0LmFkZChcImRldGFpbHMtYnV0dG9uXCIpO1xyXG4gIGRldGFpbHNCdXR0b24uaW5uZXJUZXh0ID0gXCJEZXRhaWxzXCI7XHJcblxyXG4gIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcImVkaXQtYnV0dG9uXCIpO1xyXG4gIGVkaXRCdXR0b24uaW5uZXJUZXh0ID0gXCJFZGl0XCI7XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnV0dG9uXCIpO1xyXG4gIGRlbGV0ZUJ1dHRvbi5pbm5lclRleHQgPSBcIkRlbGV0ZVwiO1xyXG5cclxuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZVwiKTtcclxuICBkYXRlLmlubmVyVGV4dCA9IGR1ZURhdGU7XHJcblxyXG4gIHNlY29uZERpdi5hcHBlbmQoZGV0YWlsc0J1dHRvbiwgZWRpdEJ1dHRvbiwgZGF0ZSwgZGVsZXRlQnV0dG9uKTtcclxuXHJcbiAgY29udGFpbmVyLmFwcGVuZChmaXJzdERpdiwgc2Vjb25kRGl2KTtcclxuXHJcbiAgZGV0YWlsc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgb3BlbldpbmRvdyhkZXRhaWxzV2luZG93KTtcclxuICAgIGRldGFpbHNXaW5kb3cuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGRldGFpbHNXaW5kb3cuYXBwZW5kKFxyXG4gICAgICBkZXRhaWxzQ29tcG9uZW50KHRpdGxlVGV4dCwgZGV0YWlscywgcHJpb3JpdHksIGR1ZURhdGUpXHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBvcGVuV2luZG93KGVkaXRXaW5kb3cpO1xyXG4gIH0pO1xyXG5cclxuICBjbG9zZUVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNsb3NlV2luZG93KGVkaXRXaW5kb3cpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gY29udGFpbmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0b2RvQ29tcG9uZW50O1xyXG4iLCJsZXQgaG9tZVByb2plY3RzQXJyYXkgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiSGVsbG8gV29ybGQgRnJvbSBBcnJheVwiLFxyXG4gICAgZGV0YWlsczogXCJTYXlpbmcgaGVsbG8gZnJvbSBhZmFyXCIsXHJcbiAgICBwcmlvcml0eTogXCJNZWRpdW1cIixcclxuICAgIGR1ZURhdGU6IFwiMTIvMTIvNDMxNFwiLFxyXG4gICAgY29tcGxldGU6IGZhbHNlLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiR3JlZXRpbmdzIHRvIHlvdVwiLFxyXG4gICAgZGV0YWlsczogXCJHcmVldGluZ3MgZnJvbSBtZSB0byB5b3VcIixcclxuICAgIHByaW9yaXR5OiBcIk1lZGl1bVwiLFxyXG4gICAgZHVlRGF0ZTogXCIxMi8xMi80ODI0XCIsXHJcbiAgICBjb21wbGV0ZTogZmFsc2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJJIGFtIHRlcnJvclwiLFxyXG4gICAgZGV0YWlsczogXCJTY3JlZWVtIVwiLFxyXG4gICAgcHJpb3JpdHk6IFwiTWVkaXVtXCIsXHJcbiAgICBkdWVEYXRlOiBcIjEyLzEyLzQxMjRcIixcclxuICAgIGNvbXBsZXRlOiBmYWxzZSxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaG9tZVByb2plY3RzQXJyYXk7XHJcbiIsImNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuXHJcbmltcG9ydCB7XHJcbiAgY29udGVudCxcclxuICBob21lLFxyXG4gIGFkZEJ1dHRvbixcclxuICBkZXRhaWxzQnV0dG9uLFxyXG4gIGRldGFpbHNXaW5kb3csXHJcbiAgb3ZlcmxheSxcclxuICBjbG9zZURldGFpbHNCdXR0b24sXHJcbiAgY2xvc2VFZGl0QnV0dG9uLFxyXG4gIGVkaXRXaW5kb3csXHJcbiAgZWRpdEJ1dHRvbixcclxuICBhZGRUYXNrQnV0dG9uLFxyXG4gIHRvZG9Db250ZW50LFxyXG4gIGVkaXREZXRhaWxzSW5wdXQsXHJcbiAgZWRpdFRpdGxlSW5wdXQsXHJcbiAgc3VibWl0VGFza0J1dHRvbixcclxufSBmcm9tIFwiLi9kb21TdHVmZi9nZXRFbGVtZW50c1wiO1xyXG5cclxuaW1wb3J0IHsgb3BlbldpbmRvdywgY2xvc2VXaW5kb3cgfSBmcm9tIFwiLi9kb21TdHVmZi91dGlsaXR5RnVuY3Rpb25zXCI7XHJcblxyXG5pbXBvcnQgdG9kb0NvbXBvbmVudCBmcm9tIFwiLi9kb21TdHVmZi9jb21wb25lbnRzL3RvZG9JdGVtQ29tcG9uZW50XCI7XHJcblxyXG5pbXBvcnQgaG9tZVByb2plY3RzQXJyYXkgZnJvbSBcIi4vcHJvamVjdERhdGFcIjtcclxuY29uc29sZS5sb2coaG9tZVByb2plY3RzQXJyYXkpO1xyXG5cclxuLy8gdG9kb0NvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XHJcbi8vICAgY29uc29sZS5sb2coXCJIZWxsbywgU2Nyb2xsXCIpO1xyXG4vLyB9KTtcclxuLy8gYm9keS5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuLy8gICBjb25zb2xlLmxvZyhcIkhlbGxvLCBTY3JvbGxcIik7XHJcbi8vIH0pO1xyXG4vLyBjb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4vLyAgIGNvbnNvbGUubG9nKFwiSGVsbG8sIFNjcm9sbFwiKTtcclxuLy8gfSk7XHJcblxyXG5ib2R5Lm9uc2Nyb2xsID0gKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiSGVsbG8gYm9keVwiKTtcclxufTtcclxuXHJcbnRvZG9Db250ZW50Lm9uc2Nyb2xsID0gKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiSGVsbG8sIHRvZG8tY29udGVudFwiKTtcclxufTtcclxuXHJcbmNvbnRlbnQub25zY3JvbGwgPSAoKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJoZWxsbywgY29udGVudFwiKTtcclxufTtcclxuXHJcbi8vIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuLy8gICBob21lUHJvamVjdHMuYWRkVGFzayh7XHJcbi8vICAgICB0aXRsZTogXCJOZXcgVGFjayBIZXJlXCIsXHJcbi8vICAgICBkZXRhaWxzOiBcIm5ldyBEdW1tbnkgVGFza1wiLFxyXG4vLyAgICAgcHJpb3JpdHk6IFwiSGlnaFwiLFxyXG4vLyAgICAgZHVlRGF0ZTogXCIxMy8xMC80NDA4XCIsXHJcbi8vICAgICBjb21wbGV0ZTogZmFsc2UsXHJcbi8vICAgfSk7XHJcbi8vIH0pO1xyXG5cclxuc3VibWl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGhvbWVQcm9qZWN0cy5hZGRUYXNrKHtcclxuICAgIHRpdGxlOiBlZGl0VGl0bGVJbnB1dC52YWx1ZSxcclxuICAgIGRldGFpbHM6IGVkaXREZXRhaWxzSW5wdXQudmFsdWUsXHJcbiAgICBwcmlvcml0eTogXCJIaWdoXCIsXHJcbiAgICBkdWVEYXRlOiBcIjEzLzEwLzQ0MDhcIixcclxuICAgIGNvbXBsZXRlOiBmYWxzZSxcclxuICB9KTtcclxufSk7XHJcblxyXG5hZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgaG9tZVByb2plY3RzLmVkaXRUYXNrKGVkaXRXaW5kb3cpO1xyXG59KTtcclxuXHJcbi8vIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuLy8gICBjb25zb2xlLmxvZyhcIkhlb28sXCIpO1xyXG4vLyB9KTtcclxuXHJcbmNsYXNzIFByb2plY3RzIHtcclxuICBjb25zdHJ1Y3RvcihhcnJheU9mVG9kb3MpIHtcclxuICAgIHRoaXMuYXJyYXlPZlRvZG9zID0gYXJyYXlPZlRvZG9zO1xyXG4gIH1cclxuXHJcbiAgZGlzcGxheVRhc2tzKCkge1xyXG4gICAgdGhpcy5hcnJheU9mVG9kb3MuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICB0b2RvQ29udGVudC5hcHBlbmQoXHJcbiAgICAgICAgdG9kb0NvbXBvbmVudChpdGVtLnRpdGxlLCBpdGVtLmRldGFpbHMsIGl0ZW0ucHJpb3JpdHksIGl0ZW0uZHVlRGF0ZSlcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkVGFzayhvYmplY3QpIHtcclxuICAgIHRoaXMuYXJyYXlPZlRvZG9zLnVuc2hpZnQob2JqZWN0KTtcclxuICAgIHRvZG9Db250ZW50LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBjb25zb2xlLmxvZyhcIkhvbWUgUHJvamVjdHMgQXJyYXk6IFwiLCBob21lUHJvamVjdHNBcnJheSk7XHJcbiAgICB0aGlzLmRpc3BsYXlUYXNrcygpO1xyXG4gICAgY2xvc2VXaW5kb3coZWRpdFdpbmRvdyk7XHJcbiAgfVxyXG4gIGVkaXRUYXNrKCkge1xyXG4gICAgb3BlbldpbmRvdyhlZGl0V2luZG93KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGhvbWVQcm9qZWN0cyA9IG5ldyBQcm9qZWN0cyhob21lUHJvamVjdHNBcnJheSk7XHJcbmhvbWVQcm9qZWN0cy5kaXNwbGF5VGFza3MoKTtcclxuIl0sIm5hbWVzIjpbImNvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkZXRhaWxzV2luZG93IiwiZWRpdFdpbmRvdyIsIm92ZXJsYXkiLCJjbG9zZUVkaXRCdXR0b24iLCJhZGRUYXNrQnV0dG9uIiwidG9kb0NvbnRlbnQiLCJlZGl0VGl0bGVJbnB1dCIsImVkaXREZXRhaWxzSW5wdXQiLCJzdWJtaXRUYXNrQnV0dG9uIiwib3BlbldpbmRvdyIsInRhcmdldCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImNsb3NlV2luZG93IiwiYWRkIiwidGl0bGVUZXh0IiwiZGV0YWlscyIsInByaW9yaXR5IiwiZHVlRGF0ZSIsImNvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJmaXJzdERpdiIsImlucHV0IiwidHlwZSIsInRpdGxlIiwiaW5uZXJUZXh0IiwiYXBwZW5kIiwic2Vjb25kRGl2IiwiZGV0YWlsc0J1dHRvbiIsImVkaXRCdXR0b24iLCJkZWxldGVCdXR0b24iLCJkYXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImlubmVySFRNTCIsImNsb3NlQnV0dG9uIiwiZGVzY3JpcHRpb24iLCJ0b2dnbGUiLCJ0b2dnbGVEaXNwbGF5IiwiY29tcGxldGUiLCJib2R5IiwiY29uc29sZSIsImxvZyIsIm9uc2Nyb2xsIiwiaG9tZVByb2plY3RzIiwiYWRkVGFzayIsInZhbHVlIiwiZWRpdFRhc2siLCJjb25zdHJ1Y3RvciIsImFycmF5T2ZUb2RvcyIsInRoaXMiLCJkaXNwbGF5VGFza3MiLCJmb3JFYWNoIiwiaXRlbSIsIm9iamVjdCIsInVuc2hpZnQiXSwic291cmNlUm9vdCI6IiJ9