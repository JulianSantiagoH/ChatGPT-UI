const element = document.querySelectorAll(".buttonOpen");
const dashboard = document.querySelector(".dashboard");
const buttonBody = document.querySelectorAll(".buttonMenuClosed")
const buttonModal= document.querySelector(".button-modal")

element.forEach((element) => {
  element.addEventListener("click", function () {
    if (dashboard.classList.contains("dashboard")) {
      dashboard.classList.remove("dashboard");
      dashboard.classList.add("dashboard-closed");
      buttonModal.style.marginLeft = "0px";
      buttonBody.forEach((buttonBody)=>{
        buttonBody.style.display="block";
      })
    } else {
      dashboard.classList.remove("dashboard-closed");
      dashboard.classList.add("dashboard");
      buttonBody.forEach((buttonBody)=>{
        buttonBody.style.display="none";
        buttonModal.style.marginLeft = "15px";
      })
    }
  });
});
