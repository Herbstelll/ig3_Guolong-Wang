let isShowingDropdown = false;

function myFunction(x) {
    x.classList.toggle("change");
    toggleView();

}

function toggleView() {
    const dropDown = $('#dropDown');
    if (isShowingDropdown) {
        isShowingDropdown = false;
        $('.tile').remove();
        dropDown.css({
            'display': 'none'
    });

    } else {
        isShowingDropdown = true;
        const tile = $(`
            <div class="tile">
                <h3><a href= "website.html">Home</a></h3>
                <h3><a href= "https://www.hfg-gmuend.de/">Über mich</a></h3>
                <h3><a href= "https://www.hfg-gmuend.de/">Kontakt</a></h3>
               
            </div>
        `);
        dropDown.append(tile);
        dropDown.css({
            'display': 'block'
    });

        console.log('hi');

    }
}