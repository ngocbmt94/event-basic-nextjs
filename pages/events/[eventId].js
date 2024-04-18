import { useRouter } from "next/router";
import { getEventById, getFeaturedEvents } from "../../dummy-data";
import Error from "../../components/ui/Error";
import EventSummary from "../../components/event-detail/EventSummary";
import EventLogistics from "../../components/event-detail/EventLogistics";
import EventContent from "../../components/event-detail/EventContent";
import Head from "next/head";

function EventDetailPage({ event }) {
  if (!event) return <p className="center">Loading...</p>;
  const { description, title, date, location, image } = event;
  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
      <EventSummary title={title} />
      <EventLogistics date={date} address={location} image={image} imageAlt={title} />
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const eventId = params.eventId;
  const event = await getEventById(eventId);

  if (!event) return { notFound: true };

  return {
    props: {
      event,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const allEvents = await getFeaturedEvents();
  const paths = allEvents.map((e) => e.id).map((id) => ({ params: { eventId: id } }));
  return {
    paths,
    fallback: true,
  };
}

export default EventDetailPage;
