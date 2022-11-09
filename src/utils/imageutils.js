export const convertImageTobBase64 = (file) => {
  let base64String = "";
  var reader = new FileReader();
  console.log("next");

  reader.onload = function () {
    base64String = reader.result.replace("data:", "").replace(/^.+,/, "");

    // alert(imageBase64Stringsep);
    console.log(base64String);
  };
  reader.readAsDataURL(file);
};
