
export class AppState {
  get = async (): Promise<CounterGetResponse> => {
    const resp = await fetch('https://cli-rn.batyr.io/api/counter');
    const json: CounterGetResponse = await resp.json();
    return json;
  };
}
