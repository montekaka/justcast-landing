const redirectPageShowId = (show_id) => {
  const dict = {
    'nixer-show-5e99c437-55be-44f6-8302-23f9188d194e': 'nixershow'
  }

  return dict[show_id] ? dict[show_id] : show_id
}

export {
  redirectPageShowId
}