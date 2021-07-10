module.exports.payload = {
  "op": 2,
  "d": {
    "token": null,
    "intents": 513,
    "properties": {
      "$os": "areo.js",
      "$browser": "areo.js",
      "$device": "areo.js"
    }
  }
};

module.exports.MessageTypes = {
  0: 'default',
  1: 'recipient_add',
  2: 'recipient_remove',
  3: 'call',
  4: 'channel_name_change',
  5: 'channel_icon_change',
  6: 'pins_add',
  7: 'guild_member_join',
  8: 'user_premium_guild_subscription',
  9: 'user_premium_guild_subscription_tier_1',
  10: 'user_premium_guild_subscription_tier_2',
  11: 'user_premium_guild_subscription_tier_3',
  12: 'channel_follow_add',
  14: 'guild_discovery_disqualified',
  15: 'guild_discovery_requalified'

}