import { Line } from '@/components/Line';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [firstNumber, setFirstNumber] = useState('010');
  const [middleNumber, setMiddleNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');
  const [email, setEmail] = useState('');
  const [domain, setDomain] = useState('');
  const [isDirect, setIsDirect] = useState(true);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const clear = () => {
    setName('');
    setFirstNumber('010');
    setMiddleNumber('');
    setLastNumber('');
    setEmail('');
    setDomain('');
    setIsDirect(true);
    setSubject('');
    setMessage('');
  };

  const isNumber = (number: string) => {
    const re = new RegExp('^[0-9]{0,4}$');

    return re.test(number);
  };

  const sendEmail = () => {
    const templateParams = {
      name: name,
      number: `${firstNumber}-${middleNumber}-${lastNumber}`,
      email: `${email}@${domain}`,
      subject: subject,
      message: message,
    };

    try {
      emailjs.send(
        'service_xc79g3o',
        'template_uqllmdt',
        templateParams,
        'Mu9SzmMPQ8dC82KOV',
      );
      alert(t('mail.success'));
      clear();
    } catch {
      alert(t('mail.fail'));
    }
  };

  return (
    <div className="mt-[5.9375vw] w-[51.04vw] font-apple text-[20px]">
      <div className="flex mb-[20px] text-[24px]">{t('word.profile')}</div>
      <Line virtualWidth="51.04vw" />
      <Line virtualWidth="51.04vw" end />
      <div className="flex items-center h-[70px]">
        <div className="w-[11.3vw] pl-[20px]">{t('word.name')}</div>
        <div className="bg-white flex items-center px-[5px] h-[32px] text-[14px] text-black w-[16.6665vw]">
          <input
            spellCheck={false}
            className="w-full bg-transparent outline-none"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
        </div>
      </div>
      <Line virtualWidth="51.04vw" />
      <div className="flex items-center h-[70px]">
        <div className="w-[11.3vw] pl-[20px]">{t('word.phone')}</div>
        <div className="flex gap-[1.302vw]">
          <div className="w-[4.6875vw] bg-white flex items-center px-[5px] h-[32px] text-[14px] text-black">
            <select
              className="w-full"
              value={firstNumber}
              onChange={(e) => {
                setFirstNumber(e.target.value);
              }}
            >
              <option value="010">010</option>
              <option value="011">011</option>
              <option value="016">016</option>
              <option value="017">017</option>
              <option value="018">018</option>
              <option value="019">019</option>
            </select>
          </div>
          <div className="w-[4.6875vw] bg-white flex items-center px-[5px] h-[32px] text-[14px] text-black">
            <input
              spellCheck={false}
              className="w-full bg-transparent outline-none"
              onChange={(e) => {
                isNumber(e.target.value)
                  ? setMiddleNumber(e.target.value)
                  : null;
              }}
              value={middleNumber}
            />
          </div>
          <div className="w-[4.6875vw] bg-white flex items-center px-[5px] h-[32px] text-[14px] text-black">
            <input
              spellCheck={false}
              className="w-full bg-transparent outline-none"
              onChange={(e) => {
                isNumber(e.target.value) ? setLastNumber(e.target.value) : null;
              }}
              value={lastNumber}
            />
          </div>
        </div>
      </div>
      <Line virtualWidth="51.04vw" />
      <div className="flex items-center h-[70px]">
        <div className="w-[11.3vw] pl-[20px]">{t('word.email')}</div>
        <div className="flex gap-[15px]">
          <div className="bg-white flex items-center px-[5px] h-[32px] text-[14px] text-black w-[16.6665vw]">
            <input
              spellCheck={false}
              className="w-full bg-transparent outline-none"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>
          <div>@</div>
          <div className="bg-white flex items-center px-[5px] h-[32px] text-[14px] text-black w-[6.77vw]">
            <input
              spellCheck={false}
              disabled={!isDirect}
              className="w-full bg-transparent outline-none"
              onChange={(e) => {
                setDomain(e.target.value);
              }}
              value={domain}
            />
          </div>
          <div className="bg-white flex items-center px-[5px] h-[32px] text-[14px] text-black w-[6.77vw]">
            <select
              className="w-full"
              value={domain}
              onChange={(e) => {
                if (e.target.value === 'direct') {
                  setIsDirect(true);
                  setDomain('');
                } else {
                  setIsDirect(false);
                  setDomain(e.target.value);
                }
              }}
            >
              <option value="direct">{t('word.directInput')}</option>
              <option value="gmail.com">gmail.com</option>
              <option value="naver.com">naver.com</option>
              <option value="daum.net">daum.net</option>
              <option value="hanmail.net">hanmail.net</option>
            </select>
          </div>
        </div>
      </div>
      <Line virtualWidth="51.04vw" />
      <Line virtualWidth="51.04vw" end />
      <div className="mt-[5.2vw] flex mb-[20px] text-[24px]">
        {t('word.inquiry')}
      </div>
      <Line virtualWidth="51.04vw" />
      <Line virtualWidth="51.04vw" end />
      <div className="flex items-center h-[70px]">
        <div className="w-[11.3vw] pl-[20px]">{t('word.subject')}</div>
        <div className="mr-[20px] bg-white flex items-center px-[5px] h-[32px] text-[14px] text-black w-[38.54vw]">
          <input
            spellCheck={false}
            className="w-full bg-transparent outline-none"
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            value={subject}
          />
        </div>
      </div>
      <Line virtualWidth="51.04vw" />
      <div className="flex items-center h-[240px]">
        <div className="w-[11.3vw] pl-[20px]">{t('word.message')}</div>
        <div className="mr-[20px] bg-white px-[5px] py-[5px] text-[14px] text-black w-[38.54vw] h-[200px]">
          <textarea
            spellCheck={false}
            className="h-full w-full bg-transparent outline-none resize-none"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={message}
          />
        </div>
      </div>
      <Line virtualWidth="51.04vw" />
      <Line virtualWidth="51.04vw" end />
      <div className="flex justify-center text-[22px] mt-[4.5vw] gap-[30px] text-black">
        <div
          className="bg-white w-[10.41vw] h-[60px] flex justify-center items-center hover:cursor-pointer hover:bg-vte-gray-3"
          onClick={() => {
            sendEmail();
          }}
        >
          {t('word.receipt')}
        </div>
        <div
          className="bg-white w-[10.41vw] h-[60px] flex justify-center items-center hover:cursor-pointer hover:bg-vte-gray-3"
          onClick={() => {
            clear();
          }}
        >
          {t('word.cancellation')}
        </div>
      </div>
    </div>
  );
};
