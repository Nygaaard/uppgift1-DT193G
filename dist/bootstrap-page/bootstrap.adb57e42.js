document.getElementById("addButton").addEventListener("click",function(){for(var e=document.getElementById("firstname"),t=document.getElementById("age"),d=document.getElementById("message"),n=document.getElementsByName("gender"),l=document.getElementById("errorDiv"),a=!1,m=0;m<n.length;m++)if(n[m].checked){a=!0;break}if(!e.value||!t.value||!d.value||!a){l.style.display="block";return}l.style.display="none";for(var r=e.value,o=t.value,u=d.value,c="",g=0;g<n.length;g++)if(n[g].checked){c=n[g].value;break}document.getElementById("frameworkTable").getElementsByTagName("tbody")[0].insertRow().innerHTML=`
        <tr>
            <td>${r}</td>
            <td>${o}</td>
            <td>${u}</td>
            <td>${c}</td>
        </tr>
    `,document.getElementById("frameworkForm").reset()});
//# sourceMappingURL=bootstrap.adb57e42.js.map
