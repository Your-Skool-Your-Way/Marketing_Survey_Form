// JavaScript for accordion functionality
var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });

    
}
// dynamically date change 

function setDate() {
    const dateLabel = document.getElementById('dateLabel');
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = String(currentDate.getFullYear()).slice(-2);
    const formattedDate = `${day}-${month}-${year}`;
    dateLabel.textContent = `Date: ${formattedDate}`;
}

// Call the setDate function when the page loads
window.onload = setDate;

// Function to display the uploaded image
function displayImage(event) {
    const input = event.target;
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const uploadedImage = document.getElementById('uploadedImage');
            uploadedImage.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}


 // Function to clear the canvas
 function clearCanvas(canvasId) {
    const canvas = document.getElementById(canvasId);
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function clearCanvas(canvasId) {
    var canvas = document.getElementById(canvasId);
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
}


function uploadSignature(canvasId, fileInputId) {
    const canvas = document.getElementById(canvasId);
    const dataURL = canvas.toDataURL('image/png');
    fetch(dataURL)
        .then(res => res.blob())
        .then(blob => {
            const file = new File([blob], 'signature.png', { type: 'image/png' });
            const fileInput = document.getElementById(fileInputId);
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            fileInput.files = dataTransfer.files;
            alert('Signature uploaded successfully');
        });
}
