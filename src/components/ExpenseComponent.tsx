import expenseDataJson from "../data/data.json";
import logoImg from "../assets/images/logo.svg";
import Chart from "./Chart";

function ExpenseComponent() {
  return (
    <section className="mx-4 w-full max-w-lg md:mx-0">
      <article className="flex justify-between rounded-2xl bg-userSoftRed px-5 py-6 md:px-8">
        <div>
          <h2 className="text-userVeryPaleOrange md:text-sm">My balance</h2>
          <p className="mt-2 text-3xl font-bold text-userVeryPaleOrange">
            $921.48
          </p>
        </div>
        <img src={logoImg} alt="Logo" />
      </article>
      <Chart expenseData={expenseDataJson} />
    </section>
  );
}

export default ExpenseComponent;
