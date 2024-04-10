import { motion } from "framer-motion";

interface ExpenseData {
  amount: number;
  day: string;
}

const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

function Chart({ expenseData }: { expenseData: ExpenseData[] }) {
  const maxExpense = Math.max(...expenseData.map((x: ExpenseData) => x.amount));
  const currentDay = days[new Date().getDay()];

  return (
    <div className="mt-6 rounded-2xl bg-userVeryPaleOrange px-5 py-8 md:px-8">
      <h1 className="text-2xl font-bold text-userDarkBrown md:text-3xl">
        Spending - Last 7 days
      </h1>
      <div className="mt-16 flex h-48 gap-x-0 text-sm text-userMediumBrown">
        {expenseData.map((x: ExpenseData) => {
          const divHeight = ((x.amount / maxExpense) * 100).toFixed(2);

          return (
            <div
              key={x.day}
              className="group flex h-full w-full flex-1 flex-col items-center justify-end"
            >
              <div
                className="relative flex h-full w-full flex-col items-center justify-end gap-y-1"
                style={{
                  height: `${divHeight === "1" ? 1 : Number(divHeight) - 0}%`,
                }}
              >
                <div
                  className="
                    absolute -top-10 left-1/2 hidden w-full -translate-x-1/2 items-center justify-center rounded-md bg-black py-[6px] text-xs font-bold text-white group-hover:flex md:px-0
                    md:text-sm"
                >
                  ${x.amount}
                </div>
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "100%" }}
                  transition={{
                    type: "spring",
                    duration: 1.5,
                    stiffness: 30,
                    bounce: 0.6,
                  }}
                  className={`w-3/4 rounded-md bg-userSoftRed group-hover:opacity-75 ${x.day === currentDay && "!bg-userCyan"}`}
                />
                <p>{x.day}</p>
              </div>
            </div>
          );
        })}
      </div>
      <hr className="my-6 border border-userCream" />
      <article className="flex flex-col justify-between sm:flex-row">
        <div className="text-userDarkBrown">
          <p className="text-userMediumBrown">Total this month</p>
          <p className="mt-1 text-4xl font-bold text-userDarkBrown">$478.33</p>
        </div>
        <div className="flex flex-col justify-end">
          <p className="mt-4 text-sm font-bold sm:mt-0 sm:text-right">+2.4%</p>
          <p className="text-userMediumBrown">from last month</p>
        </div>
      </article>
    </div>
  );
}

export default Chart;
