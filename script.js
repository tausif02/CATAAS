document.addEventListener("DOMContentLoaded", function () {
    const catImage = document.getElementById("catImage");
    const button = document.getElementById("newCatButton");

    function fetchCat() {
        fetch("https://cataas.com/cat?json=true")
            .then(response => response.json())
            .then(data => {
                if (data && data._id && catImage) {
                    catImage.src = `https://cataas.com/cat/${data._id}?t=${new Date().getTime()}`;
                    catImage.alt = "Random Cat Image";
                }
            })
            .catch(() => {
                catImage.alt = "Failed to load cat image.";
            });
    }

    if (button) {
        button.addEventListener("click", fetchCat);
    }

    fetchCat(); // Load an image on page load
});
