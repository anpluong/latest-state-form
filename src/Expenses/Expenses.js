import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {/* This is the way for embedded map */}
      {props.items.map((item) => {
        return <ExpenseItem key={item.id} title={item.title} amount={item.amount} />;
      })}
    </Card>
  );
};

export default Expenses;
