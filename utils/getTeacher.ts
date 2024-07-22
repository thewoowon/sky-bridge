export const getTeacher = (name: "현우진" | "이명학" | "김동욱" | "신승범" | "조정식" | "윤혜정" | "정승제" | "주혜연" | "김민정"): string => {
    switch (name) {
        case "현우진":
            return "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/5ca09aee-8481-4ab4-4a94-ec874cd90600/public";
        case "이명학":
            return "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/0a14c074-afb6-42ad-fad2-a8079622d900/public";
        case "김동욱":
            return "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/45e5a784-b250-458e-8008-1e3891d77b00/public";
        case "신승범":
            return "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/49352dd4-85a6-4918-f0a8-571d5fd53d00/public";
        case "조정식":
            return "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/ffb7169d-e992-419f-b943-debeb198da00/public";
        case "윤혜정":
            return "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/e59ddf88-3050-4d4d-7809-b9e5ae2c8700/public";
        case "정승제":
            return "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/08907d07-f231-4278-cbd2-d005dd1fc500/public";
        case "주혜연":
            return "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/884f3090-bd4a-4465-bab5-01de1bcd5b00/public";
        case "김민정":
            return "https://imagedelivery.net/6qzLODAqs2g1LZbVYqtuQw/42572302-97c1-4a7e-2bdf-1b1e78b65300/public";
        default:
            return "error";
    }
}