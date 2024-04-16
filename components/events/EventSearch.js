import { useRef } from "react";
import Button from "../ui/Button";
import styles from "./eventSearch.module.css";
import { useRouter } from "next/router";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function EventSearch() {
  const router = useRouter();
  const yearRef = useRef(null);
  const monthRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    const selectedYear = yearRef.current.value;
    const selectedMonth = monthRef.current.value;

    router.push(`/events/${selectedYear}/${selectedMonth}`);
  }
  return (
    <form className={styles.form}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthRef}>
            {months.map((month, i) => (
              <option key={month} value={i + 1}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button onClick={handleSubmit}>Find Event</Button>
    </form>
  );
}

export default EventSearch;
