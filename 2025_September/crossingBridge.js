// 프로그래머스 - 다리를 지나는 트럭

function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridge = Array(bridge_length).fill(0);
  let currentWeight = 0;
  
  while (truck_weights.length > 0 || currentWeight > 0) {
    time++;
    
    const exitingTruck = bridge.shift();
    currentWeight -= exitingTruck;
    
    if (truck_weights.length > 0 && 
      currentWeight + truck_weights[0] <= weight) {
      const newTruck = truck_weights.shift();
      bridge.push(newTruck);
      currentWeight += newTruck;
    } else {
      bridge.push(0);
    }
  }
  return time;
}