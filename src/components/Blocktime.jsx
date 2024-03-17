/* eslint-disable react/prop-types */

export default function Blocktime({ text, counter }) {
  return (
    <div className="blockTime">
      <span>{counter}</span>
      <span className="blockSpan">{text}</span>
    </div>
  );
}
