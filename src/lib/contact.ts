export type EmailOptions = {
  to?: string;
  cc?: string;
  bcc?: string;
  subject?: string;
  body?: string;
};

export const DEFAULT_EMAIL = "selvamarshall13@gmail.com";
export const DEFAULT_PHONE = "+919488718147";

const isLikelyMobile = (): boolean => {
  if (typeof navigator === "undefined") return false;
  const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera || "";
  return /android|iphone|ipad|ipod|iemobile|opera mini/i.test(userAgent);
};

const buildGmailComposeUrl = ({ to, cc, bcc, subject, body }: EmailOptions): string => {
  const params = new URLSearchParams();
  if (to) params.set("to", to);
  if (cc) params.set("cc", cc);
  if (bcc) params.set("bcc", bcc);
  if (subject) params.set("su", subject);
  if (body) params.set("body", body);
  return `https://mail.google.com/mail/?view=cm&fs=1&${params.toString()}`;
};

export const openDialer = (phoneNumber?: string) => {
  const phone = (phoneNumber || DEFAULT_PHONE).replace(/\s+/g, "");
  window.location.href = `tel:${phone}`;
};

export const openEmail = (options: EmailOptions = {}) => {
  const to = options.to || DEFAULT_EMAIL;
  const subject = options.subject || "";
  const body = options.body || "";

  if (!isLikelyMobile()) {
    const gmailUrl = buildGmailComposeUrl({ to, cc: options.cc, bcc: options.bcc, subject, body });
    window.open(gmailUrl, "_blank", "noopener,noreferrer");
    return;
  }

  const base = `mailto:${encodeURIComponent(to)}`;
  const query: string[] = [];
  if (subject) query.push(`subject=${encodeURIComponent(subject)}`);
  if (body) query.push(`body=${encodeURIComponent(body)}`);
  const mailtoUrl = query.length ? `${base}?${query.join("&")}` : base;
  window.location.href = mailtoUrl;
};


