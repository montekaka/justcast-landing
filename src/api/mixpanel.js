// https://medium.com/@andrewoons/setting-up-mixpanel-in-react-3e4c5b8c2a36
import mixpanel from 'mixpanel-browser';

mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN);

let actions = {
  identify: (id) => {
    if (process.env.REACT_APP_MIXPANEL_TOKEN) mixpanel.identify(id);
  },
  alias: (id) => {
    if (process.env.REACT_APP_MIXPANEL_TOKEN) mixpanel.alias(id);
  },
  track: (name, props, cb) => {
    if (process.env.REACT_APP_MIXPANEL_TOKEN) {
      mixpanel.track(name, props, cb)
    };
  },
  register: (props) => {
    if (process.env.REACT_APP_MIXPANEL_TOKEN) mixpanel.register(props)
  },  
  people: {
    set: (props) => {
      if (process.env.REACT_APP_MIXPANEL_TOKEN) mixpanel.people.set(props);
    },
  },
};

export let Mixpanel = actions;