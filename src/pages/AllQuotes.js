import { useEffect } from "react";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

// const DUMMY_QUOTES = [
//   {
//     id: "q1",
//     author: "Greg",
//     text: "Learning React is fun!",
//   },
//   {
//     id: "q2",
//     author: "Max",
//     text: "Learning React is great!",
//   },
//   {
//     id: "q3",
//     author: "Alicia",
//     text: "Learning React is good!",
//   },
// ];

const AllQuotes = (props) => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    <NoQuotesFound />;
  }

  return (
    <>
      <h1>All Quotes Page</h1>
      <QuoteList quotes={loadedQuotes} />
    </>
  );
};

export default AllQuotes;
