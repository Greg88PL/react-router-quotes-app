import { useParams, Route, Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";

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

const QuoteDetail = () => {
  const params = useParams();
  const { quoteId } = params;

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  // const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  // if (!quote) {
  //   return <NoQuotesFound />;
  // }

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <NoQuotesFound />;
  }

  return (
    <>
      <h1>Quote Detail Page</h1>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />

      <Route path={`/quotes/${params.quoteId}`} exact>
        <div className="centered">
          <Link
            className="btn--flat"
            to={`/quotes/${params.quoteId}/comments}`}
          >
            Load comments
          </Link>
        </div>
      </Route>

      <Route path={`/quotes/${params.quoteId}/comments}`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
