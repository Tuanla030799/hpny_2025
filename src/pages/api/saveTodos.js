import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { todos } = req.body;

  if (!todos || !Array.isArray(todos)) {
    return res.status(400).json({ message: 'Invalid data' });
  }

  try {
    // Lấy địa chỉ IP từ request headers
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'Unknown IP';

    // Lấy ngày giờ hiện tại
    const currentTime = new Date().toISOString();

    const auth = new google.auth.JWT(
      process.env.GOOGLE_CLIENT_EMAIL,
      null,
      process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'), // Xử lý ký tự xuống dòng
      ['https://www.googleapis.com/auth/spreadsheets']
    );

    const sheets = google.sheets({ version: 'v4', auth });

    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;
    
    const range = 'hpny2025'; // Replace with your sheet name and range

    // Chuẩn bị dữ liệu để lưu
    const values = todos.map((todo, index) => [
      index + 1,             // ID
      todo.value,             // Nội dung Todo
      ip,                   // Địa chỉ IP
      currentTime           // Ngày giờ
    ]);

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [['', '', '', ''], ...values],
      },
    });

    res.status(200).json({ message: 'Todos saved successfully' });
  } catch (error) {
    console.log('Error saving todos:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
