import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Greg",
    text: "Learning React is fun!",
  },
  {
    id: "q2",
    author: "Max",
    text: "Learning React is great!",
  },
  {
    id: "q3",
    author: "Alicia",
    text: "Learning React is good!",
  },
];

const AllQuotes = (props) => {
  return (
    <>
      <h1>All Quotes Page</h1>
      <QuoteList quotes={DUMMY_QUOTES} />
    </>
  );
};

export default AllQuotes;
