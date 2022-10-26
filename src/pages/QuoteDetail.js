import { useParams, Route, Link } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

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

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <NoQuotesFound />;
  }

  return (
    <>
      <h1>Quote Detail Page</h1>
      <HighlightedQuote text={quote.text} author={quote.author} />

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