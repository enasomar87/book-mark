var siteName = document.getElementById("bookmarkName")
var siteUrl = document.getElementById("bookmarkURL")

var site=[]





function addInfo(){
    // console.log("added");
    if(validateSiteName()){
        
    var data={
        name:siteName.value,
        url:siteUrl.value,
        
    };
    site.push(data);
    // console.log(productList);
    displayData(site);
    clearForm();
    
    localStorage.setItem("tableContent", JSON.stringify(site))
    }
}
if (localStorage.getItem("tableContent") != null){
    site= JSON.parse (localStorage.getItem("tableContent"))
displayData(site)
}

function displayData(list) {
    var blackBox=""

    for(var i=0; i<list.length; i++){
        
        blackBox +=`
        <tr>
        <td>${i+1}</td>
        
        <td class="text-capitalize">${site[i].name}</td>
        
     <td><button onclick="window.open('${list[i].url}')" class="btn btn-success"><i class="fa-solid fa-eye"></i> visit</button></td>
        <td><button onclick="deleteSite(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> delete</button></td>
     </tr>
        `
    }
  
document.getElementById("tableContent").innerHTML= blackBox

}

function clearForm(){
    siteName.value="";
    siteUrl.value="";
   
}


function deleteSite(index){
    site.splice(index,1);
    localStorage.setItem("tableContent", JSON.stringify(site));
    displayData(site);
    
}

function validateSiteName() {
   var nameRegex =/(.*[a-z]){3}/i
    
   var urlRegex =/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
   
   var isValid = nameRegex.test(siteName.value)
   var valid = urlRegex.test(siteUrl.value)
   if ( isValid && valid){
   
    document.getElementById("error").classList.replace("d-block", "d-none")
   }else{
    document.getElementById("error").classList.replace("d-none","d-block")
   }
   return isValid

}

function closeValidation(){
    document.getElementById("error").classList.replace("d-block","d-none")
}