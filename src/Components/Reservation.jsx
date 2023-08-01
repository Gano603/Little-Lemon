import './reservation.scss'

export default function Reservation() {
    return (
        <div className="reservation">
          <div className='heading'>
            <p>Book a Table</p>
          </div>
          <div>
            <div>
              <form>
                <input type="text" placeholder='Full Name'/>
                <input type="email" placeholder='Email'/>
                <input type="text" placeholder='Reservation Date (dd-mm)'/>
                <input type="text" placeholder='Reservation Time'/>
                <input type="number" placeholder='No. of Persons'/>
                <button type='submit' disabled>Book</button>
              </form>
            </div>
            <img src="src\assets\imgs\bady-abbas-rwkVXYzxmLI-unsplash (1).jpg" alt="Glass on a Table" />
          </div>
        </div>
    );
  }