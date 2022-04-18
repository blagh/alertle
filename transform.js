export function transform(PD) {
  let words = ['alert', 'tears', 'irate'];

  let body = PD.inputRequest.body;

  var action = PD.Acknowledge;
  var summary = "Alertle X" // TODO add a number or something
  var dedup_key = summary;

  if (body.trigger) {
    action = PD.Trigger;
  } else {
    let todays_word = words[0];

    let guess = body.guess;

    if (todays_word === guess) {
      action = PD.Resolve;
    }

    summary = "Alertle X guess: " + guess;
  }

  let normalized_event = {
    event_action: action,
    dedup_key: dedup_key,
    payload: {
      summary: '',
      source: 'alertle',
      severity: PD.Critical,
      custom_details: body
    },
  };

  PD.emitEventsV2([normalized_event]);
}
