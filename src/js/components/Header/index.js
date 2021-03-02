import SearchIcon from '../../../assets/svg/search.svg';

export const Header = ({ headingText = 'TicketNew' } = {}) => {
    const header = document.createElement('header');
    header.classList.add('header');
    header.innerHTML = `
        <div class="headingWrapper">
            <h2 class="heading">${headingText}</h2>
            <button class="searchButton">
                <img
                  src=${SearchIcon}
                  alt="searchIcon"
                  class="searchButtonIcon"
                />
            </button>
        </div>
        <nav class="nav">
            <ul class="navList">
                <li class="navListItem">
                    <a href="#" class="navLink">Select your movie</a>
                </li>
                <li class="navListItem">
                    <a href="#" class="navLink --current">Select seating</a>
                </li>
                <li class="navListItem">
                    <a href="#" class="navLink">Payment</a>
                </li>
            </ul>
        </nav>`;
    return header;
};
