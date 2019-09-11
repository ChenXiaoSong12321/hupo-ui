import getChannel from './channel'
export default async(channel, callback) => {
  const currentChannel = await getChannel()
  if (currentChannel == channel) {
    callback()
  }
}
