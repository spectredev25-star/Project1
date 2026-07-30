import Radar from "./RadarAnimation";

export default function HeroRadar() {
  return (
    <div className="absolute inset-0 opacity-70 flex justify-center items-center">
      <Radar
        speed={1}
        scale={0.5}
        ringCount={10}
        spokeCount={10}
        ringThickness={0.05}
        spokeThickness={0.01}
        sweepSpeed={1}
        sweepWidth={2}
        sweepLobes={1}
        color="#6366f1"
        backgroundColor="#000000"
        falloff={2}
        brightness={1}
      />
    </div>
  );
}