import { useState, FormEvent } from 'react';


interface Reservation {
    name: string;
    email: string;
    date: Date;
    numberOfPeople: number;
  }

const ReservationForm: React.FC = () => {
  const [reservation, setReservation] = useState<Reservation>({
    name: '',
    email: '',
    date: new Date(),
    numberOfPeople: 1
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle your form submission, e.g., API call
    console.log(reservation);
  };

  return (
    <div className="flex flex-col p-6 border rounded-md ">
      <form onSubmit={handleSubmit}>
        <input
          className="mb-2 p-2 border rounded-md text-blue-900 mr-2"
          type="text"
          placeholder="Name"
          value={reservation.name}
          onChange={(e) =>
            setReservation((prev) => ({ ...prev, name: e.target.value }))
          }
          required
        />
        <input
          className="mb-2 p-2 border rounded-md text-blue-900"
          type="email"
          placeholder="Email"
          value={reservation.email}
          onChange={(e) =>
            setReservation((prev) => ({ ...prev, email: e.target.value }))
          }
          required
        />
        <input
          className="mb-2 p-2 border rounded-md mr-2 text-blue-900"
          type="date"
          value={reservation.date.toISOString().split('T')[0]}
          onChange={(e) =>
            setReservation((prev) => ({ ...prev, date: new Date(e.target.value) }))
          }
          required
        />
        <input
          className="mb-2 p-2 border rounded-md text-blue-900"
          type="number"
          placeholder="Number of People"
          value={reservation.numberOfPeople}
          onChange={(e) =>
            setReservation((prev) => ({ ...prev, numberOfPeople: +e.target.value }))
          }
          min="1"
          required
        />
        <button className="mt-4 ml-2 p-2 bg-blue-900 text-white rounded-md" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
