export const userColumns = [
  {
    field: "username",
    headerName: "İsim",
    width: 200,
  },
  {
    field: "address",
    headerName: "Cüzdan Adresi",
    width: 250,
  },
  {
    field: "amount",
    headerName: "Miktar",
    width: 100,
  },
  {
    field: "status",
    headerName: "Durum",
    width: 100,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

export const userRows = [
  {
    id: 1,
    username: "Snow",
    status: "Tamamlandı",
    address: "1snow@gmail.com",
    amount: 35,
  },
  {
    id: 2,
    username: "Jamie Lannister",
    address: "2snow@gmail.com",
    status: "İptal Edildi",
    amount: 42,
  },
  {
    id: 3,
    username: "Lannister",
    address: "3snow@gmail.com",
    status: "Aktif",
    amount: 45,
  },
  {
    id: 4,
    username: "Stark",
    address: "4snow@gmail.com",
    status: "Tamamlandı",
    amount: 16,
  },
  {
    id: 5,
    username: "Targaryen",
    address: "5snow@gmail.com",
    status: "İptal Edildi",
    amount: 22,
  },
  {
    id: 6,
    username: "Melisandre",
    address: "6snow@gmail.com",
    status: "Tamamlandı",
    amount: 15,
  },
  {
    id: 7,
    username: "Clifford",
    address: "7snow@gmail.com",
    status: "İptal Edildi",
    amount: 44,
  },
  {
    id: 8,
    username: "Frances",
    address: "8snow@gmail.com",
    status: "Tamamlandı",
    amount: 36,
  },
  {
    id: 9,
    username: "Roxie",
    address: "snow@gmail.com",
    status: "Aktif",
    amount: 65,
  },
  {
    id: 10,
    username: "Roxie",
    address: "snow@gmail.com",
    status: "Tamamlandı",
    amount: 65,
  },
];