document.addEventListener("DOMContentLoaded", function() {
    // Font size controls
    const fontControls = document.getElementById("font-controls");
    const increaseButton = document.getElementById("increase-font");
    const decreaseButton = document.getElementById("decrease-font");
    const resetButton = document.getElementById("reset-font");

    let textElements = document.querySelectorAll("p, li, dl");
    let defaultFontSizeDesktop = 22; // Default font size for laptops and desktops
    let defaultFontSizeMobile = 12; // Default font size for mobile devices
    let currentFontSize;

    // Retrieve font size preference from Local Storage
    const storedFontSize = localStorage.getItem("fontSize");
    if (storedFontSize) {
        currentFontSize = parseInt(storedFontSize);
    } else {
        if (window.innerWidth >= 768) {
            currentFontSize = defaultFontSizeDesktop;
        } else {
            currentFontSize = defaultFontSizeMobile;
        }
    }

    // Function to update font sizes
    function updateFontSizes() {
        textElements.forEach((element) => {
            element.style.fontSize = currentFontSize + "px";
        });
    }

    // Set initial font size based on window width
    function setInitialFontSize() {
        updateFontSizes();
    }

    // Update font size on reset
    function resetFontSize() {
        if (window.innerWidth >= 768) {
            currentFontSize = defaultFontSizeDesktop;
        } else {
            currentFontSize = defaultFontSizeMobile;
        }
        updateFontSizes();
        localStorage.setItem("fontSize", currentFontSize.toString());
    }

    // Toggle font controls visibility based on scroll position
    function toggleFontControlsVisibility() {
        if (window.scrollY > 200) {
            fontControls.style.display = "flex";
        } else {
            fontControls.style.display = "none";
        }
    }

    // Event listeners for font size controls
    increaseButton.addEventListener("click", function() {
        currentFontSize += 2;
        updateFontSizes();
        localStorage.setItem("fontSize", currentFontSize.toString());
    });

    decreaseButton.addEventListener("click", function() {
        currentFontSize = Math.max(currentFontSize - 2, 10);
        updateFontSizes();
        localStorage.setItem("fontSize", currentFontSize.toString());
    });

    resetButton.addEventListener("click", resetFontSize);

    // Set initial font size and visibility for font size controls
    setInitialFontSize();
    toggleFontControlsVisibility();

    // Listen for scroll events for font size controls
    window.addEventListener("scroll", toggleFontControlsVisibility);

    // Hide

    // ** This is next pragms **/
    //
    //
    //
    //
    // Next Program ;
    // Font changer controls

    const fontSelect = document.getElementById("font-select");
    const fontSelectWrapper = document.getElementById("font-select-wrapper");
    const bodyElement = document.body;

    // Retrieve font preference from Local Storage
    const selectedFont = localStorage.getItem("selectedFont");
    if (selectedFont) {
        applyFontStyle(selectedFont);
        fontSelect.value = selectedFont;
    }

    // Show font selection dropdown on home screen
    if (window.location.pathname === "/") {
        fontSelectWrapper.style.display = "none";
    }

    // Toggle font selection dropdown visibility while scrolling a post
    window.addEventListener("scroll", function() {
        const scrollY = window.scrollY || window.pageYOffset;
        if (scrollY > 200) {
            fontSelectWrapper.style.display = "block";
        } else {
            fontSelectWrapper.style.display = "none";
        }
    });

    fontSelect.addEventListener("change", function() {
        const selectedFont = fontSelect.value;
        applyFontStyle(selectedFont);
        localStorage.setItem("selectedFont", selectedFont);
    });

    function applyFontStyle(selectedFont) {
        if (selectedFont === "default") {
            bodyElement.style.fontFamily = "sans-serif";
        } else if (selectedFont === "jameel") {
            bodyElement.style.fontFamily = "'Jameel Noori', sans-serif";
        } else if (selectedFont === "mahar") {
            bodyElement.style.fontFamily = "'Mahar Nastaliq', cursive";
        } else if (selectedFont === "kasheeda") {
            bodyElement.style.fontFamily = "'Kasheeda', cursive";
        }
    }

    // Hiding font manipulation program!
    let isScrolling;
    let userInteracted = false;
    let fontSelectActive = false;

    fontSelect.addEventListener("change", function() {
        fontSelectActive = true;
        hideControlsAfterDelay();

        // Reset fontSelectActive to false after the font is changed
        setTimeout(function() {
            fontSelectActive = false;
        }, 0);
    });

    fontSelectWrapper.addEventListener("mouseenter", function() {
        fontSelectActive = true;
        hideControlsAfterDelay();
    });

    fontSelectWrapper.addEventListener("mouseleave", function() {
        fontSelectActive = false;
        hideControlsAfterDelay();
    });

    // New event listeners to ensure controls remain visible while interacting
    fontSelectWrapper.addEventListener("click", function() {
        fontSelectActive = true;
        hideControlsAfterDelay();
    });

    window.addEventListener("scroll", function() {
        clearTimeout(isScrolling);

        const scrollY = window.scrollY || window.pageYOffset;

        if (scrollY > 200) {
            // Show the font controls
            fontControls.style.display = "flex";
            hideControlsAfterDelay();

            if (fontSelectActive) {
                fontSelectWrapper.style.display = "block";
            } else {
                hideControlsAfterDelay();
            }
        }
    });

    function hideControlsAfterDelay() {
        // Clear the previous timeout if any
        clearTimeout(isScrolling);

        // Set a timeout to hide the font controls after scrolling stops
        isScrolling = setTimeout(function() {
            if (!userInteracted && !fontSelectActive) {
                fontControls.style.display = "none";
                fontSelectWrapper.style.display = "none";
            }
        }, 2000); // Adjust the timeout duration as needed
    }


});