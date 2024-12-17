import React from "react";
import "./FAQ.css";
import { FaPlus } from "react-icons/fa";

const qs = [
  "넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?",
  "넷플릭스란 무엇인가요?",
  "넷플릭스 요금은 얼마인가요?",
  "어디에서 시청할 수 있나요?",
  "멤버십을 해지하려면 어떻게 하나요?",
  "아이들이 넷플릭스를 봐도 좋을까요?",
];

const nqs = [
  {
    q: "넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?",
    a: "lorem",
  },
  {
    q: "넷플릭스란 무엇인가요?",
  },
  {
    q: "넷플릭스 요금은 얼마인가요?",
  },
  {
    q: "어디에서 시청할 수 있나요?",
  },
  {
    q: "멤버십을 해지하려면 어떻게 하나요?",
  },
  {
    q: "아이들이 넷플릭스를 봐도 좋을까요?",
  },
];

const FAQ = () => {
  const title = "자주 묻는 질문";

  const me = {
    name: "Lee",
  };

  return (
    <div className="faq">
      <h2>{me.name}</h2>
      <ul>
        {nqs.map((q, i) => {
          return (
            <li key={i}>
              <button>
                {q.q} <FaPlus />
              </button>

              {q.a && (
                <div>
                  <p>
                    {q.a}
                    <a href="">ㄱㄳ</a>
                  </p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FAQ;

<div>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut totam, sed
    corrupti nemo suscipit eaque nesciunt nam eveniet accusamus, placeat minus
    blanditiis ullam? Sequi quidem nam, vel sit perspiciatis omnis.
  </p>
</div>;
