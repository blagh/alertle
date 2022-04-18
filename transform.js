export function transform(PD) {
  // Sample Event Transformation
  let body = PD.inputRequest.body;

  let normalized_event = {
    event_action: PD.Trigger,
    // optionally include a key to prevent creating duplicate
    // incidents when the same event is sent more than once
    // dedup_key: body.event_key,
    payload: {
      summary: 'raw event',
      source: 'raw event',
      severity: PD.Critical,
      custom_details: body
    },
    // optionally display links or images on web and mobile
    // links: [{
    //   "href": "https://example.com/",
    //   "text": "Link text"
    // }],
    // images: [{
    //   "src": "https://example.com/example.png",
    //   "href": "https://example.com/",
    //   "alt": "Example text"
    // }]
  };

  PD.emitEventsV2([normalized_event]);
}
