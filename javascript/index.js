document.addEventListener('DOMContentLoaded', function() {
    var SiteFrame = document.getElementById('Nav-Frame');
    SiteFrame.src = "/Home"
    const NavBtn = {
        Home: () => {
            SiteFrame.src = "/Home";
            console.log('Home clicked');
        },
        About: () => {
            SiteFrame.src = "/About";
            console.log('About clicked');
        },
        Services: () => {
            SiteFrame.src = "/Services";
            console.log('Services clicked');
        },
        Contact: () => {
            SiteFrame.src = "/Contact";
            console.log('Contact clicked');
        }
    };

    document.getElementById('Nav-Home-Btn').addEventListener('click', NavBtn.Home);
    document.getElementById('Nav-About-Btn').addEventListener('click', NavBtn.About);
    document.getElementById('Nav-Services-Btn').addEventListener('click', NavBtn.Services);
    document.getElementById('Nav-Contact-Btn').addEventListener('click', NavBtn.Contact);
});
