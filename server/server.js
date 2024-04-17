export const URL_DUMMY = "https://nextjs-fetching-ed961-default-rtdb.firebaseio.com/events.json";

export function formatData(data) {
  const resultData = [];
  for (const key in data) {
    resultData.push({ ...data[key], id: key });
  }
  return resultData;
}

export async function getAllEvents() {
  const res = await fetch(URL_DUMMY);
  const data = await res.json();
  const covertData = formatData(data);

  return covertData;
}

export async function getFeaturedEvents() {
  const data = await getAllEvents();

  return data.filter((e) => e.isFeatured);
}

export async function getEventById(id) {
  const data = await getAllEvents();
  return data.find((event) => event.id === id);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const data = await getAllEvents();

  let filteredEvents = data.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });

  return filteredEvents;
}
