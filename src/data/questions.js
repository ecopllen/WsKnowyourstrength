// src/data/questions.js
// 10 situational questions for FPT University Da Nang (FUDA) students
// Categories: Communication (C), Creativity (I), Research (R), Leadership (L), Problem-solving (P)

export const STRENGTH_CATEGORIES = {
  Communication: {
    code: 'C',
    name: 'Communication',
    labelVi: 'Giao tiếp & Kết nối',
    role: 'Presenter',
    roleVi: 'Người truyền cảm hứng & Đại diện nhóm',
    color: '#f37021', // FPT Orange
    description: 'Truyền đạt rõ ràng, kết nối mọi người, làm cầu nối nội bộ và pitch dự án thuyết phục.'
  },
  Creativity: {
    code: 'I',
    name: 'Creativity',
    labelVi: 'Sáng tạo & Đổi mới',
    role: 'Idea Generator',
    roleVi: 'Người khởi xướng ý tưởng',
    color: '#d99a00',
    description: 'Nghĩ ra hướng đi mới, tạo nét riêng khác biệt, phá vỡ khuôn mẫu thông thường.'
  },
  Research: {
    code: 'R',
    name: 'Research',
    labelVi: 'Nghiên cứu & Dữ liệu',
    role: 'Data Keeper',
    roleVi: 'Chuyên gia phân tích & Kiểm chứng',
    color: '#1e78d6',
    description: 'Tìm kiếm, đào sâu và kiểm chứng thông tin cẩn thận, lập luận dựa trên số liệu thực tế.'
  },
  Leadership: {
    code: 'L',
    name: 'Leadership',
    labelVi: 'Lãnh đạo & Điều phối',
    role: 'Team Lead',
    roleVi: 'Trưởng nhóm & Điều phối mục tiêu',
    color: '#d92f2f',
    description: 'Phân việc đúng người đúng việc, giữ tiến độ dự án, quyết đoán trước thời hạn deadline.'
  },
  'Problem-solving': {
    code: 'P',
    name: 'Problem-solving',
    labelVi: 'Giải quyết vấn đề',
    role: 'Problem Solver',
    roleVi: 'Người tháo gỡ bế tắc',
    color: '#22935a',
    description: 'Bình tĩnh khi gặp khó, tìm giải pháp thực tế, tối ưu nguồn lực và vượt qua trở ngại kỹ thuật.'
  }
};

export const QUESTIONS = [
  {
    id: 1,
    title: 'Khởi động đồ án môn',
    scenario: 'Nhóm vừa nhận đề đồ án môn, còn 1 tuần là nộp. Ở buổi họp đầu, bạn thường:',
    options: [
      { id: 'a', text: 'Hỏi từng bạn đang nghĩ gì rồi tóm lại ý chung cho cả nhóm', strength: 'Communication' },
      { id: 'b', text: 'Đưa ra 2–3 hướng làm khác với cách mọi người hay làm', strength: 'Creativity' },
      { id: 'c', text: 'Tìm đề tương tự và tài liệu để hiểu yêu cầu trước khi bàn', strength: 'Research' },
      { id: 'd', text: 'Chia việc, chốt ai làm gì và hạn nộp từng phần', strength: 'Leadership' },
      { id: 'e', text: 'Tách đề thành các phần khó và chỉ ra phần dễ gặp rủi ro nhất', strength: 'Problem-solving' }
    ]
  },
  {
    id: 2,
    title: 'Phát hiện thiếu sót trước giờ nộp',
    scenario: 'Còn 1 ngày là nộp, nhóm phát hiện thiếu một phần quan trọng của bài. Bạn có xu hướng:',
    options: [
      { id: 'a', text: 'Nghĩ hướng đi khác để bù phần thiếu mà bài vẫn gây ấn tượng', strength: 'Creativity' },
      { id: 'b', text: 'Đọc lại đề để xác định phần nào bắt buộc, phần nào bỏ được', strength: 'Research' },
      { id: 'c', text: 'Họp nhanh, chia lại việc theo thời gian còn lại và nhận chốt kết quả', strength: 'Leadership' },
      { id: 'd', text: 'Xác định chỗ kẹt nhất và gỡ từng bước một', strength: 'Problem-solving' },
      { id: 'e', text: 'Giữ tinh thần cả nhóm, hỏi từng bạn cần hỗ trợ gì', strength: 'Communication' }
    ]
  },
  {
    id: 3,
    title: 'Thuyết trình nhóm',
    scenario: 'Trong buổi thuyết trình của nhóm, phần bạn thấy thoải mái nhất là:',
    options: [
      { id: 'a', text: 'Chuẩn bị số liệu, dẫn chứng và trả lời câu hỏi về nguồn', strength: 'Research' },
      { id: 'b', text: 'Điều phối thứ tự nói, canh giờ và nhắc cả nhóm đi đúng kịch bản', strength: 'Leadership' },
      { id: 'c', text: 'Xử lý câu hỏi khó hoặc tình huống bất ngờ từ giảng viên', strength: 'Problem-solving' },
      { id: 'd', text: 'Đứng nói chính và kết nối với người nghe', strength: 'Communication' },
      { id: 'e', text: 'Thiết kế slide và cách kể để bài nổi bật', strength: 'Creativity' }
    ]
  },
  {
    id: 4,
    title: 'Bất đồng ý kiến trong nhóm',
    scenario: 'Hai bạn trong nhóm bất đồng hướng làm và tranh cãi trong group Zalo. Bạn thường:',
    options: [
      { id: 'a', text: 'Đề xuất cách chốt (bỏ phiếu hoặc theo tiêu chí) để nhóm đi tiếp', strength: 'Leadership' },
      { id: 'b', text: 'Phân tích điểm hợp lý và rủi ro thực tế của mỗi hướng', strength: 'Problem-solving' },
      { id: 'c', text: 'Nhắn riêng từng bạn để nghe lý do, giúp hai bên hiểu nhau', strength: 'Communication' },
      { id: 'd', text: 'Đề xuất hướng thứ ba kết hợp ý của cả hai', strength: 'Creativity' },
      { id: 'e', text: 'Tìm dữ liệu hoặc ví dụ thực tế xem hướng nào có cơ sở hơn', strength: 'Research' }
    ]
  },
  {
    id: 5,
    title: 'Tiếp cận đề tài môn học mới',
    scenario: 'Đề tài môn học hoàn toàn mới với bạn. Việc đầu tiên bạn làm:',
    options: [
      { id: 'a', text: 'Làm thử một bản nhỏ, lỗi đâu sửa đó', strength: 'Problem-solving' },
      { id: 'b', text: 'Hỏi người đã biết (bạn, anh chị, giảng viên) để hiểu nhanh', strength: 'Communication' },
      { id: 'c', text: 'Nghĩ xem chủ đề có thể áp dụng theo cách mới nào', strength: 'Creativity' },
      { id: 'd', text: 'Đọc nhiều nguồn rồi ghi chú tổng hợp', strength: 'Research' },
      { id: 'e', text: 'Chia chủ đề cho từng bạn tìm hiểu rồi hẹn giờ tổng hợp', strength: 'Leadership' }
    ]
  },
  {
    id: 6,
    title: 'Thành viên chậm tiến độ',
    scenario: 'Một bạn im lặng nhiều tuần và chưa nộp phần việc của mình. Bạn thường:',
    options: [
      { id: 'a', text: 'Nhắn riêng để hiểu bạn đang gặp chuyện gì', strength: 'Communication' },
      { id: 'b', text: 'Viết lại rõ yêu cầu của phần việc đó để bạn dễ bắt tay làm', strength: 'Research' },
      { id: 'c', text: 'Hỏi xem bạn vướng ở đâu rồi cùng gỡ từng điểm kẹt', strength: 'Problem-solving' },
      { id: 'd', text: 'Nghĩ một cách làm mới cho phần việc đó để bạn thấy hứng thú hơn', strength: 'Creativity' },
      { id: 'e', text: 'Đặt deadline rõ ràng và nói trước cách xử lý nếu vẫn trễ', strength: 'Leadership' }
    ]
  },
  {
    id: 7,
    title: 'Lựa chọn đề tài đồ án',
    scenario: 'Cả nhóm cần chọn đề tài đồ án. Bạn thường đóng góp bằng cách:',
    options: [
      { id: 'a', text: 'Đề xuất đề tài khác biệt mà ít nhóm nghĩ tới', strength: 'Creativity' },
      { id: 'b', text: 'Đặt tiêu chí chọn và đưa cả nhóm tới quyết định trong buổi họp', strength: 'Leadership' },
      { id: 'c', text: 'Giải thích lợi ích của từng đề tài để thuyết phục mọi người', strength: 'Communication' },
      { id: 'd', text: 'So sánh theo dữ liệu: có người dùng không, có tài liệu không', strength: 'Research' },
      { id: 'e', text: 'Chọn đề tài giải quyết vấn đề thật và làm được trong thời gian có', strength: 'Problem-solving' }
    ]
  },
  {
    id: 8,
    title: 'Kiểm duyệt báo cáo trước khi nộp',
    scenario: 'Khi cả nhóm sắp nộp báo cáo, điều bạn hay để ý và sửa nhất:',
    options: [
      { id: 'a', text: 'Số liệu, trích dẫn, nguồn có chính xác và nhất quán không', strength: 'Research' },
      { id: 'b', text: 'Chỗ nào lập luận còn hở hoặc giải pháp chưa thực tế', strength: 'Problem-solving' },
      { id: 'c', text: 'Báo cáo có điểm nhấn và khác với bài thông thường không', strength: 'Creativity' },
      { id: 'd', text: 'Mọi phần đã có người chịu trách nhiệm và kịp tiến độ chưa', strength: 'Leadership' },
      { id: 'e', text: 'Văn phong rõ ràng, dễ hiểu với người đọc', strength: 'Communication' }
    ]
  },
  {
    id: 9,
    title: 'Chia nhóm tự do trên lớp',
    scenario: 'Giảng viên giao bài nhóm nhưng không chia nhóm, cả lớp còn lộn xộn. Bạn thường:',
    options: [
      { id: 'a', text: 'Đứng ra rủ vài bạn lập nhóm và đề xuất cách làm', strength: 'Leadership' },
      { id: 'b', text: 'Đi hỏi các bạn xung quanh để tìm người cùng hướng', strength: 'Communication' },
      { id: 'c', text: 'Đọc kỹ yêu cầu để biết giảng viên mong đợi gì', strength: 'Research' },
      { id: 'd', text: 'Nghĩ trước chỗ dễ gặp vấn đề và đề xuất cách tránh', strength: 'Problem-solving' },
      { id: 'e', text: 'Nghĩ một cách tổ chức mới lạ để việc lập nhóm bớt nhàm', strength: 'Creativity' }
    ]
  },
  {
    id: 10,
    title: 'Vai trò khi người khác cần trợ giúp',
    scenario: 'Bạn bè hay nhờ bạn việc gì nhất trong nhóm?',
    options: [
      { id: 'a', text: 'Gỡ rối khi sản phẩm hoặc kế hoạch gặp sự cố', strength: 'Problem-solving' },
      { id: 'b', text: 'Góp ý ý tưởng, đặt tên, thiết kế', strength: 'Creativity' },
      { id: 'c', text: 'Phân việc và tổ chức nhóm', strength: 'Leadership' },
      { id: 'd', text: 'Nói giúp, viết giúp, giới thiệu giúp', strength: 'Communication' },
      { id: 'e', text: 'Tìm giúp thông tin và tài liệu', strength: 'Research' }
    ]
  }
];

// Helper to compute scores and determine primary & secondary strengths
// Algorithm rules:
// - Count selections per strength type (0-10). Highest is Primary, second highest is Secondary.
// - Tie-breaking: type chosen in Question 10 wins (the question about how others perceive you). If still tied, student can choose or use deterministic fallback.
// - Strength clarity: highest score >= 5 => "Thế mạnh rõ nét"; highest score <= 3 => "Đa năng, chưa nghiêng hẳn về một kiểu".
export function calculateStrengthResult(answers) {
  const scores = {
    Communication: 0,
    Creativity: 0,
    Research: 0,
    Leadership: 0,
    'Problem-solving': 0
  };

  let q10Strength = null;

  const answerList = Array.isArray(answers)
    ? answers
    : Object.entries(answers).map(([qId, val]) => {
        return typeof val === 'object' && val !== null
          ? { questionId: Number(qId), ...val }
          : { questionId: Number(qId), optionId: val };
      });

  for (const item of answerList) {
    const qId = Number(item.questionId);
    let strength = item.strength;

    if (!strength && item.optionId) {
      const q = QUESTIONS.find(x => x.id === qId);
      if (q) {
        const opt = q.options.find(o => o.id.toLowerCase() === String(item.optionId).toLowerCase());
        if (opt) strength = opt.strength;
      }
    }

    if (strength && scores[strength] !== undefined) {
      scores[strength] += 1;
      if (qId === 10) {
        q10Strength = strength;
      }
    }
  }

  const total = Object.values(scores).reduce((a, b) => a + b, 0);

  // Group strengths by score descending
  const scoreEntries = Object.entries(scores);
  scoreEntries.sort((a, b) => b[1] - a[1]);

  const maxScore = scoreEntries[0][1];
  const topStrengths = scoreEntries.filter(e => e[1] === maxScore).map(e => e[0]);

  let primaryStrength = null;
  let secondaryStrength = null;
  let isPrimaryTied = false;
  let isSecondaryTied = false;
  let tiedPrimaryOptions = [];
  let tiedSecondaryOptions = [];

  // Tie-breaking:
  // "Hòa điểm: kiểu được chọn ở câu 10 thắng (câu hỏi về cách người khác nhìn bạn). Nếu vẫn hòa, sinh viên tự chọn."
  if (topStrengths.length === 1) {
    primaryStrength = topStrengths[0];

    const remaining = scoreEntries.filter(e => e[0] !== primaryStrength);
    const secondMaxScore = remaining[0][1];
    const secondTopStrengths = remaining.filter(e => e[1] === secondMaxScore).map(e => e[0]);

    if (secondTopStrengths.length === 1) {
      secondaryStrength = secondTopStrengths[0];
    } else {
      // Tie for secondary
      if (q10Strength && secondTopStrengths.includes(q10Strength)) {
        secondaryStrength = q10Strength;
      } else {
        isSecondaryTied = true;
        tiedSecondaryOptions = secondTopStrengths;
        secondaryStrength = secondTopStrengths[0];
      }
    }
  } else {
    // Tie for primary
    if (q10Strength && topStrengths.includes(q10Strength)) {
      primaryStrength = q10Strength;
      const remainingTop = topStrengths.filter(s => s !== primaryStrength);
      if (remainingTop.length === 1) {
        secondaryStrength = remainingTop[0];
      } else {
        isSecondaryTied = true;
        tiedSecondaryOptions = remainingTop;
        secondaryStrength = remainingTop[0];
      }
    } else {
      isPrimaryTied = true;
      tiedPrimaryOptions = topStrengths;
      primaryStrength = topStrengths[0];
      secondaryStrength = topStrengths[1];
    }
  }

  // Clarity interpretation:
  // "Kiểu cao nhất từ 5 lần trở lên: thế mạnh rõ nét. Cao nhất chỉ từ 3 lần trở xuống: đa năng, chưa nghiêng hẳn về một kiểu."
  let clarityLabel = 'Thế mạnh định hình vừa phải';
  let clarityLevel = 'moderate';
  let clarityDesc = 'Các thế mạnh của bạn phân bổ tương đối đồng đều trong các tình huống làm việc nhóm.';

  if (maxScore >= 5) {
    clarityLabel = 'Thế mạnh rõ nét';
    clarityLevel = 'distinct';
    clarityDesc = 'Bạn có xu hướng hành vi và phong cách làm việc rất rõ nét, đóng vai trò mũi nhọn nổi bật trong nhóm.';
  } else if (maxScore <= 3) {
    clarityLabel = 'Đa năng, chưa nghiêng hẳn về một kiểu';
    clarityLevel = 'versatile';
    clarityDesc = 'Bạn là mẫu thành viên đa năng (all-rounder), linh hoạt thích ứng với nhiều vai trò khác nhau tùy theo hoàn cảnh dự án.';
  }

  return {
    scores,
    total,
    primaryStrength,
    secondaryStrength,
    isPrimaryTied,
    isSecondaryTied,
    tiedPrimaryOptions,
    tiedSecondaryOptions,
    q10Strength,
    clarity: {
      label: clarityLabel,
      level: clarityLevel,
      description: clarityDesc,
      maxScore
    }
  };
}
