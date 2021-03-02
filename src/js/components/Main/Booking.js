import { BookingForm } from './BookingForm';

const Screen = () => {
    const screen = document.createElement('div');
    screen.classList.add('screen');
    return screen;
};

export const Booking = () => {
    const booking = document.createElement('section');
    booking.classList.add('booking');
    booking.append(Screen(), BookingForm());
    return booking;
};
