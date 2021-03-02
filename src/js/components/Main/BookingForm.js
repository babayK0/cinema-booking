const Seat = ({ id }) => {
    const seat = document.createElement('seat');
    seat.classList.add('seat');
    seat.innerHTML = `
        <input
          type="checkbox"
          id="${id}"
          class="seatCheckbox visuallyHidden"
        />
        <label for="${id}" class="seatLabel"></label>
    `;
    return seat;
};

const mockedSeats = [1, 2, 3, 4, 5];
const SeatRow = ({ rowId, seats = mockedSeats } = {}) => {
    const seatRow = document.createElement('li');
    seatRow.classList.add('seatRow');
    seatRow.setAttribute('id', `seatRow:${rowId}`);
    const seatRowFragment = document.createDocumentFragment();
    seatRowFragment.append(
        ...seats.map((id) => Seat({ id: `seat:${rowId}-${id}` }))
    );
    seatRow.append(seatRowFragment);
    return seatRow;
};

const mockedSeatRows = [1, 2, 3, 4, 5, 6];
const BookingSeats = ({ seatRows = mockedSeatRows } = {}) => {
    const bookingSeats = document.createElement('ol');
    bookingSeats.classList.add('seats');
    const bookingSeatsFragment = document.createDocumentFragment();
    bookingSeatsFragment.append(...seatRows.map((rowId) => SeatRow({ rowId })));
    bookingSeats.append(bookingSeatsFragment);
    return bookingSeats;
};

const SeatsInfo = () => {
    const seatsInfo = document.createElement('div');
    seatsInfo.classList.add('seatsInfo');
    seatsInfo.innerHTML = `
        <div class="seat">
          <label class="seatLabel">
            <p class="seatLabelInfo">- Available</p>
          </label>
        </div>
        <div class="seat">
          <label class="seatLabel --purchased">
            <p class="seatLabelInfo">- Purchased</p>
          </label>
        </div>
        <div class="seat">
          <label class="seatLabel --reserved">
            <p class="seatLabelInfo">- Reserved</p>
          </label>
        </div>
        <div class="seat">
          <label class="seatLabel --selected">
            <p class="seatLabelInfo">- Selected</p>
          </label>
        </div>
    `;
    return seatsInfo;
};

const SubmitButton = () => {
    const submitButtonWrapper = document.createElement('div');
    submitButtonWrapper.classList.add('submitButtonWrapper');
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'button');
    submitButton.classList.add('submitButton');
    submitButton.innerHTML = 'Book seats';
    submitButtonWrapper.append(submitButton);
    return submitButtonWrapper;
};

export const BookingForm = () => {
    const bookingForm = document.createElement('form');
    bookingForm.setAttribute('id', 'bookingSeats');
    bookingForm.append(BookingSeats(), SeatsInfo(), SubmitButton());
    return bookingForm;
};
