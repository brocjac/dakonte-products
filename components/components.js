
class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <a href="index.html"><img class="logo-img-text" src="images/images/DPG-Corp-Family-Logo-TIE-GMC-EP-transparent.jpg" alt="Dakonte Product Group, TIE office mates, Great Menu Covers, and Easy Partition Logo. " loading="lazy"></a>
            <div class="nav" aria-label="main navigation">
                <ul>
                    <li>
                        <div class="hover">
                            <a onclick="show_hide_1()" href="#" class="menuItem hover-menu list-link-1">Products</a>
                            <div class="list list-1" style="display: none;">
                                <ul>
                                    <li><a class="list-links" href="https://tieofficemates.com/shop-ticket-holders/heavy-duty-stitched-job-ticket-holders/">Job Ticket Holders</a></li>
                                    <li><a class="list-links" href="https://tieofficemates.com/vinyl-document-sleeves/waterproof-press-lock-seal/">Waterproof Holders</a></li>
                                    <li><a class="list-links" href="https://tieofficemates.com/color-coding-options/">Color Coded Products</a></li>
                                    <li><a class="list-links" href="https://greatmenucovers.com/cafe-menu-covers-vinyl-trim">Café Menu Covers</a></li>
                                    <li><a class="list-links" href="https://greatmenucovers.com/clear-plastic-menu-sleeve-pockets/">Clear Menu Covers</a></li>
                                    <li><a class="list-links" href="https://greatmenucovers.com/add-a-menu-page-inserts/">Add-A-Page</a></li>
                                    <li><a class="list-links" href="https://tieofficemates.com/auto-repair-order-holders/">Service Order Holders</a></li>
                                    <li><a class="list-links" href="https://tieofficemates.com/easy-sign-holders/">Sign Holders</a></li>
                                    <li><a class="list-links" href="https://tieofficemates.com/vinyl-tag-holders/">Tag Holders</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="hover">
                            <a onclick="show_hide_2()" href="#" class="menuItem hover-menu list-link-2">Industry</a>
                            <div class="list list-2" style="display: none;">
                                <a class="list-links" href="#">Auto Repair</a>
                                <a class="list-links" href="#">Construction</a>
                                <a class="list-links" href="#">Education</a>
                                <a class="list-links" href="#">Facility Manager</a>
                                <a class="list-links" href="#">Government</a>
                                <a class="list-links" href="#">Healthcare</a>
                                <a class="list-links" href="#">Manufacturer</a>
                                <a class="list-links" href="#">Office</a>
                                <a class="list-links" href="#">Retail</a>
                            </div>
                        </div>
                    </li>
                    <li><a href="brands.html" class="menuItem hover-menu">Brands</a></li>
                </ul>
            </div>
            <button class="hamburger">
                <i class="menuIcon material-icons">menu</i>
                <i class="closeIcon material-icons" style="display: none">close</i>
            </button>
        </header>
        `;
    }
}

class Footer extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
            <footer>
                <img class="logo-img-footer" src="../images/icons/about-dgp.png" alt="Dakonte Product Group logo. " loading="lazy">
                <div aria-description="about us and privacy pages">
                    <p><a href="about-dpg.html">About DGP</a> | <a href="privacy.html">Privacy</a></p>
                    <p class="copywrite">© Dakonte Product Group, Inc 2023. All Rights Reserved.</p>
                </div>
                <p class="trademark">The brands listed above are trademarks of Dakonte Product Group.</p>
            </footer>
        `
    }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);