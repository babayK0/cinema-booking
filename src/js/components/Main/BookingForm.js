const Seat = ({ rowId, id }) => {
    const seat = document.createElement('seat');
    seat.classList.add('seat');
    seat.innerHTML = `
        <input
          type="checkbox"
          id="seat:${rowId}-${id}"
          class="seatCheckbox visuallyHidden"
          data-row="${rowId}" data-seat="${id}"
        />
        <label for="seat:${rowId}-${id}" class="seatLabel"></label>
    `;
    return seat;
};

const mockedSeats = [1, 2, 3, 4, 5];
const SeatRow = ({ rowId, seats = mockedSeats } = {}) => {
    const seatRow = document.createElement('li');
    seatRow.classList.add('seatRow');
    seatRow.setAttribute('id', `seatRow:${rowId}`);
    const seatRowFragment = document.createDocumentFragment();
    seatRowFragment.append(...seats.map((id) => Seat({ rowId, id })));
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

const SelectedSeats = () => {
    const selectedSeats = document.createElement('div');
    selectedSeats.setAttribute('id', 'selectedSeats');
    return selectedSeats;
};

const updateSeatsScreen = (selectedSeats) => {
    const selectedSeatsScreen = document.getElementById('selectedSeats');
    const selectedSeatsFragment = document.createDocumentFragment();
    selectedSeats.forEach((seat) => {
        const info = `Row: ${seat.row}; Seat: ${seat.seat};`;
        selectedSeatsFragment.append(info);
    });
    selectedSeatsScreen.innerHTML = '';
    selectedSeatsScreen.append(selectedSeatsFragment);
};

export const BookingForm = () => {
    let state = {
        selectedSeats: [],
    };

    const setState = (newState) => {
        state = { ...newState };
    };

    const getSeatData = (selectedSeat) => {
        const { row, seat } = selectedSeat.dataset;
        return { row, seat };
    };

    const addSeat = (selectedSeat) => {
        setState({
            selectedSeats: [...state.selectedSeats, getSeatData(selectedSeat)],
        });
    };

    const removeSeat = (selectedSeat) => {
        const filteredSeats = state.selectedSeats.filter((seat) => {
            const { row: selectedRow, seat: selectedSeatId } = getSeatData(
                selectedSeat
            );
            return (
                `${seat.row}${seat.seat}` !== `${selectedRow}${selectedSeatId}`
            );
        });
        setState({ selectedSeats: filteredSeats });
    };

    const handleSeatSelect = ({ target }) => {
        if (target.type !== 'checkbox') return;
        if (target.checked) addSeat(target);
        else removeSeat(target);
        updateSeatsScreen(state.selectedSeats);
    };

    const bookingForm = document.createElement('form');
    bookingForm.setAttribute('id', 'bookingSeats');
    bookingForm.append(
        BookingSeats(),
        SeatsInfo(),
        SelectedSeats(),
        SubmitButton()
    );

    bookingForm.addEventListener('change', handleSeatSelect);
    return bookingForm;
};
