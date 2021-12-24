import PropTypes from "prop-types";
import {
  StatisticsList,
  StatisticsItem,
} from "components/Statistics/Statistics.styled";
const Statistics = ({ title, stats }) => {
  return (
    <>
      {title ? (
        <h2>{title}</h2>
      ) : (
        <StatisticsList>
          {stats.map(({ label, id, percentage }) => {
            return (
              <StatisticsItem eventType={label} key={id}>
                <span>{label}</span>
                <span>{percentage}%</span>
              </StatisticsItem>
            );
          })}
        </StatisticsList>
      )}
    </>
  );
};
Statistics.protoTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string,
      id: PropTypes.number,
      percentage: PropTypes.number,
    })
  ),
};
export default Statistics;
