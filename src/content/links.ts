import assets from "../assets";
import LinkModel from "../types/links.model";

const Links: Record<string, LinkModel> = {
  Email: {
    Name: "Email",
    Description: "fikremariam.a.asegie@gmail.com",
    URL: "mailto:fikremariam.a.asegie@gmail.com",
    Icon: assets.Icons.Email,
  },
  Phone: {
    Name: "Phone",
    Description: "+251940229161",
    URL: "tel:+251940229161",
    Icon: assets.Icons.Phone,
  },
  Location: {
    Name: "Location",
    Description: "Addis Ababa, Ethiopia",
    URL: "https://maps.app.goo.gl/5nEasUU66W1CN2fT6",
    Icon: assets.Icons.Location,
  },
  Resume: {
    Name: "Resume",
    Description: "Resume",
    URL: "https://drive.google.com/file/d/1g_kA8hf0ofIH8z94DMZZ2M4mu-8UjhIm/view?usp=sharing",
    Icon: assets.Icons.Resume,
  },
  Github: {
    Name: "GitHub",
    Description: "fikreanteneh",
    URL: "https://github.com/fikreanteneh",
    Icon: assets.Icons.Github,
  },
  Linkedin: {
    Name: "LinkedIn",
    Description: "fikremariamanteneh",
    URL: "https://www.linkedin.com/in/fikremariamanteneh/",
    Icon: assets.Icons.Linkedin,
  },
  Telegram: {
    Name: "Telegram",
    Description: "@Fik1ant",
    URL: "https://t.me/Fik1ant",
    Icon: assets.Icons.Telegram,
  },
  Leetcode: {
    URL: "https://leetcode.com/fikre_anteneh/",
    Description: "fikre_anteneh",
    Name: "Leetcode",
    Icon: assets.Icons.Leetcode,
  },
  Codeforces: {
    Name: "Codeforces",
    Description: "fikre.anteneh",
    URL: "https://codeforces.com/profile/fikre.anteneh",
    Icon: assets.Icons.Codeforces,
  },
  //   Twitter: {
  //     Name: "Twitter",
  //     Description: "fikre_anteneh",
  //     URL: "https://twitter.com/fikre_anteneh",
  //     Icon: assets.Icons.,
  //   },
};

export default Links;
