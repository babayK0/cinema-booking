import { Info } from './Info';
import { Booking } from './Booking';

export const Main = () => {
    const main = document.createElement('main');
    main.classList.add('main');
    main.append(Info(), Booking());
    return main;
};
