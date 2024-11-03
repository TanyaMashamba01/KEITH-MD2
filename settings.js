/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEM5QzV0a0hRclQ2TEVTd3U3Zmgyc21jVllrR2JBL2VwckFlZTY3R2JWMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNVJ0N2FSQlNWMTA3NlNYcjJBQUZoeU5CcjRMaDBCS2JRVzd0ZThIamxuST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVRG81bU9DMVJUQ1N2WEtUcHpUVmY5WTBMNzlsWFkxb2w1bGs0aVFDUEVjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRGo1anZqVDRTNWwvUlQ3aUtoazNSSXpqSnBaM1NsTVdheGtHUkZjbWpjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlKTDgxbnowc3cyVU91dEZTWlBaQzBKYkVLZjd0SXUzeUViTkxDQ3NHM0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikh3dmhjYklZU1JyOHBJeDZCamZGNURmb0N0bURlbFhhbkFkTG44T3oyVG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEdBejF5bEsxbDJVZFJKb3UxTmhtT05aMXVnR1JoZk1kdDArS1RVSWFsQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0IyOHFsT0srb3pKN1FZRUNRNHBCNGdPMGtPVHZxM1F0RWROWlRnVXEzVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IituWkJkNmhmWk15MGNpZEFLWWkwMnNLNExDYlN3M1pYd1B0bXRlL0Y0T3h6NUltYkgveDNvYlJxL2wxZE5uQ0FiVnhiVUtMczlxS3BhMnFaSTVueWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk5LCJhZHZTZWNyZXRLZXkiOiJsS3Q4bnlPNCtHcWZLL2xmd3pjZ3JHcUZzUmpwV3EzckJjUk5WV1VueTVvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ2UXlqaDRvY1NoNkQ4eldBNWpBeG93IiwicGhvbmVJZCI6Ijg0ZjI5YWQyLTBkZTUtNDVkZi1iZTY0LWM0MTFmMzE1MjJiYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSDlub0dKTWFidVFLdGRyZDNsT3B0eEJTMjQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZEZ5K2EwWHZTYlhLVGtPVHZvOFcyR0tTWjBrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlNLNEsyNVhCIiwibWUiOnsiaWQiOiIyNjM3MTY3MjkyMjI6NzJAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09uMTV1QURFTXF3bmJrR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InZkdnVDVFJ0cnYwa3o2Vml2UFVsWWR6Wk9SL0JKV3hMNzV4bjFWOXd4VVE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlA4KzVRUXdndzZkTVpxMDgzRjNYbWszVUdJNDVDdVdRV1BPZFl2WnowTmJKdjM5Ujdjd292amdjK3phOTNnQ2FQb3NCTVpjRDhxaEhRU2xDYmRBOUJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtNk12WE4wazdqdTlDc1FyMmJrREk0RXltL1BSaUFTaW1IRll6MXJQTVVSWGd1T2g0aHlNUG15VDFvam9Ib0NNb0VUT3lrYzFTL0I0TXNxQUxqdWRoZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzcxNjcyOTIyMjo3MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiM2I3Z2swYmE3OUpNK2xZcnoxSldIYzJUa2Z3U1ZzUysrY1o5VmZjTVZFIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwNjMxNzY3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVIcCJ9';

const prefix = process.env.PREFIX || '/';
const mycode = process.env.CODE || "263";
const author = process.env.STICKER_AUTHOR || 'JoshKing';
const packname = process.env.PACKNAME || 'joshking';
const dev = process.env.DEV || '263716729222';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || 'MidKing01';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  autobio,
  mode,
  prefix,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
session,
antitag,
antidelete
};
