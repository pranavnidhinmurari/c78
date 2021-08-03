var images = ["dad.jpg","mymom.jpg","brother.jpg","me.png"];
var names = ["Nidhin Murari", "Vinu Venu", "Ekansh Nidhin Murari", "Pranav Nidhin Murari"];
 var i = 0; 
 function update() 
 { i++;
     var numbers_of_family_member_in_array = 5;
      if(i > numbers_of_family_member_in_array ) 
    { i = 0; 
} 
var updatedImage = images[i];
 var updatedName = names[i];
  document.getElementById("family_member_image").src = updatedImage;
   document.getElementById("family_member_name").innerHTML = updatedName;
 }